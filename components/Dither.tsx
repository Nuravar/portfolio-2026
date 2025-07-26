import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

const waveVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const waveFragmentShader = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_waveSpeed;
uniform float u_waveFrequency;
uniform float u_waveAmplitude;
uniform vec3 u_colors[8];
uniform int u_colorCount;
uniform float u_ditherStrength;
uniform vec2 u_mousePos;
uniform bool u_enableMouse;
uniform float u_mouseRadius;
varying vec2 vUv;

// Bayer matrix for dithering
const float bayerMatrix[64] = float[64](
  0.0/64.0, 32.0/64.0, 8.0/64.0, 40.0/64.0, 2.0/64.0, 34.0/64.0, 10.0/64.0, 42.0/64.0,
  48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0, 50.0/64.0, 18.0/64.0, 58.0/64.0, 26.0/64.0,
  12.0/64.0, 44.0/64.0, 4.0/64.0, 36.0/64.0, 14.0/64.0, 46.0/64.0, 6.0/64.0, 38.0/64.0,
  60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0, 62.0/64.0, 30.0/64.0, 54.0/64.0, 22.0/64.0,
  3.0/64.0, 35.0/64.0, 11.0/64.0, 43.0/64.0, 1.0/64.0, 33.0/64.0, 9.0/64.0, 41.0/64.0,
  51.0/64.0, 19.0/64.0, 59.0/64.0, 27.0/64.0, 49.0/64.0, 17.0/64.0, 57.0/64.0, 25.0/64.0,
  15.0/64.0, 47.0/64.0, 7.0/64.0, 39.0/64.0, 13.0/64.0, 45.0/64.0, 5.0/64.0, 37.0/64.0,
  63.0/64.0, 31.0/64.0, 55.0/64.0, 23.0/64.0, 61.0/64.0, 29.0/64.0, 53.0/64.0, 21.0/64.0
);

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 0.0;
  
  for(int i = 0; i < 6; i++) {
    value += amplitude * noise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

vec3 getNearestColor(vec3 color) {
  vec3 nearestColor = u_colors[0];
  float minDistance = length(color - u_colors[0]);
  
  for(int i = 1; i < u_colorCount && i < 8; i++) {
    float distance = length(color - u_colors[i]);
    if(distance < minDistance) {
      minDistance = distance;
      nearestColor = u_colors[i];
    }
  }
  return nearestColor;
}

void main() {
  vec2 st = vUv;
  st.x *= u_resolution.x / u_resolution.y;
  
  // Create flowing wave pattern
  vec2 q = vec2(
    fbm(st + u_time * u_waveSpeed),
    fbm(st + vec2(1.0))
  );
  
  vec2 r = vec2(
    fbm(st + q * u_waveFrequency + u_time * u_waveSpeed * 0.7),
    fbm(st + q * u_waveFrequency + vec2(1.7, 9.2))
  );
  
  float f = fbm(st + r * u_waveAmplitude);
  
  // Mouse interaction
  if(u_enableMouse) {
    vec2 mouseUv = u_mousePos / u_resolution;
    mouseUv.y = 1.0 - mouseUv.y;
    mouseUv.x *= u_resolution.x / u_resolution.y;
    
    float dist = length(st - mouseUv);
    float mouseEffect = 1.0 - smoothstep(0.0, u_mouseRadius, dist);
    f += mouseEffect * 0.5 * sin(u_time * 4.0);
  }
  
  // Map to color range
  float colorIndex = (f + 1.0) * 0.5 * float(u_colorCount - 1);
  int baseIndex = int(floor(colorIndex));
  float t = fract(colorIndex);
  
  vec3 color1 = u_colors[clamp(baseIndex, 0, u_colorCount - 1)];
  vec3 color2 = u_colors[clamp(baseIndex + 1, 0, u_colorCount - 1)];
  vec3 baseColor = mix(color1, color2, t);
  
  // Apply dithering
  if(u_ditherStrength > 0.0) {
    vec2 pixelCoord = floor(vUv * u_resolution * 0.25);
    int x = int(mod(pixelCoord.x, 8.0));
    int y = int(mod(pixelCoord.y, 8.0));
    float threshold = bayerMatrix[y * 8 + x];
    
    vec3 noise3 = vec3(threshold) * u_ditherStrength;
    baseColor += noise3 - u_ditherStrength * 0.5;
    baseColor = clamp(baseColor, 0.0, 1.0);
    
    baseColor = getNearestColor(baseColor);
  }
  
  // Check if color is close to black (transparent)
  float luminance = dot(baseColor, vec3(0.299, 0.587, 0.114));
  float alpha = smoothstep(0.02, 0.08, luminance);
  
  gl_FragColor = vec4(baseColor, alpha);
}
`;

interface WaveShaderProps {
  colors: string[];
  waveSpeed: number;
  waveFrequency: number;
  waveAmplitude: number;
  ditherStrength: number;
  enableMouseInteraction: boolean;
  mouseRadius: number;
  disableAnimation: boolean;
}

function WaveShader({
  colors,
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  ditherStrength,
  enableMouseInteraction,
  mouseRadius,
  disableAnimation
}: WaveShaderProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState(new THREE.Vector2(0, 0));
  const { size, viewport, gl } = useThree();

  // Convert hex colors to THREE.Color objects
  const threeColors = colors.slice(0, 6).map(hex => new THREE.Color(hex));
  
  // Ensure we have 6 colors, fill with last color if needed
  while (threeColors.length < 6) {
    threeColors.push(threeColors[threeColors.length - 1] || new THREE.Color('#1E1918'));
  }

  const uniforms = useRef({
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(size.width, size.height) },
    u_waveSpeed: { value: waveSpeed },
    u_waveFrequency: { value: waveFrequency },
    u_waveAmplitude: { value: waveAmplitude },
    u_color1: { value: threeColors[0] },
    u_color2: { value: threeColors[1] },
    u_color3: { value: threeColors[2] },
    u_color4: { value: threeColors[3] },
    u_color5: { value: threeColors[4] },
    u_color6: { value: threeColors[5] },
    u_ditherStrength: { value: ditherStrength },
    u_mousePos: { value: mousePos },
    u_enableMouse: { value: enableMouseInteraction ? 1.0 : 0.0 },
    u_mouseRadius: { value: mouseRadius }
  });

  useFrame(({ clock }) => {
    if (!disableAnimation) {
      uniforms.current.u_time.value = clock.getElapsedTime();
    }
    
    uniforms.current.u_waveSpeed.value = waveSpeed;
    uniforms.current.u_waveFrequency.value = waveFrequency;
    uniforms.current.u_waveAmplitude.value = waveAmplitude;
    uniforms.current.u_ditherStrength.value = ditherStrength;
    uniforms.current.u_enableMouse.value = enableMouseInteraction ? 1.0 : 0.0;
    uniforms.current.u_mouseRadius.value = mouseRadius;
    
    // Update colors
    uniforms.current.u_color1.value.copy(threeColors[0]);
    uniforms.current.u_color2.value.copy(threeColors[1]);
    uniforms.current.u_color3.value.copy(threeColors[2]);
    uniforms.current.u_color4.value.copy(threeColors[3]);
    uniforms.current.u_color5.value.copy(threeColors[4]);
    uniforms.current.u_color6.value.copy(threeColors[5]);
  });

  useEffect(() => {
    uniforms.current.u_resolution.value.set(size.width, size.height);
  }, [size]);

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!enableMouseInteraction) return;
    
    const rect = gl.domElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos(new THREE.Vector2(x, y));
  };

  return (
    <mesh
      ref={meshRef}
      scale={[viewport.width, viewport.height, 1]}
      onPointerMove={handlePointerMove}
    >
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms.current}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

interface DitheredWavesProps {
  colors?: string[];
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  ditherStrength?: number;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  disableAnimation?: boolean;
  className?: string;
}

export default function DitheredWaves({
  colors = ["#1a1a1a", "#2d2d2d", "#404040", "#595959", "#737373", "#8c8c8c"],
  waveSpeed = 0.02,
  waveFrequency = 1.5,
  waveAmplitude = 0.4,
  ditherStrength = 0.15,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  disableAnimation = false,
  className = "w-full h-full"
}: DitheredWavesProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: false,
          alpha: true,
          premultipliedAlpha: false
        }}
        style={{ background: 'transparent' }}
      >
        <WaveShader
          colors={colors}
          waveSpeed={waveSpeed}
          waveFrequency={waveFrequency}
          waveAmplitude={waveAmplitude}
          ditherStrength={ditherStrength}
          enableMouseInteraction={enableMouseInteraction}
          mouseRadius={mouseRadius}
          disableAnimation={disableAnimation}
        />
      </Canvas>
    </div>
  );
}