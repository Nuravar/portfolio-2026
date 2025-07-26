"use client";

import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar, ExternalLink, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Quote, Download, Play, Pause, Image as ImageIcon, BarChart3, Zap, Users, Target, Lightbulb, AlertTriangle, CheckCircle, TrendingUp, Clock, MapPin } from "lucide-react";
import Footer from '@/components/footer';
export default function BlogCaseStudyPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        {/* Top header with breadcrumb and mobile sidebar trigger */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4 lg:px-6">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Home className="ml-auto w-3 h-3" />
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dana Inc</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Hide on desktop (lg and up), show on mobile/tablet, positioned at top right */}
          <div className="lg:hidden">
            <SidebarTrigger />
          </div>
        </div>
        
        <div className="p-6 lg:p-13 max-w-4xl mx-auto">
          <article className="space-y-8">
            {/* Header Section */}
            <header className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Dana Incorporated
              </h1>
              <p className="text-lg text-muted-foreground">
                A comprehensive analysis of thermal management solutions for electric vehicle battery systems, resulting in 25% improved cooling efficiency and extended battery life.
              </p>
              
              {/* Contributors */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Contributors:</span>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/contributor1" target="_blank" rel="noopener noreferrer">
                    John Doe <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/contributor2" target="_blank" rel="noopener noreferrer">
                    Jane Smith <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/contributor3" target="_blank" rel="noopener noreferrer">
                    Mike Johnson <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Tags:</span>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Thermal Management</Badge>
                    <Badge variant="secondary">Electric Vehicles</Badge>
                    <Badge variant="secondary">Battery Technology</Badge>
                    <Badge variant="secondary">Engineering</Badge>
                    <Badge variant="secondary">Research</Badge>
                    <Badge variant="secondary">Research</Badge>
                  </div>
                </div>
              </div>
            </header>

            <Separator />

            {/* Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Executive Summary</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    This case study examines the development and implementation of an advanced battery cooling system for electric vehicles. The project involved extensive thermal analysis, prototype development, and real-world testing to achieve significant improvements in battery performance and longevity.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Key Metrics */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Cooling Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">+25%</div>
                    <p className="text-xs text-muted-foreground">Improvement over baseline</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Battery Life</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">+18%</div>
                    <p className="text-xs text-muted-foreground">Extended operational life</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Energy Consumption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">-12%</div>
                    <p className="text-xs text-muted-foreground">Reduced cooling energy</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Problem Statement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Problem Statement</h2>
              <div className="space-y-3">
                <p>
                  Electric vehicle battery systems face significant thermal management challenges that impact performance, safety, and longevity. Traditional cooling methods often fall short of meeting the demands of high-performance applications.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <span>Inefficient heat dissipation during high-power operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <span>Temperature variations across battery cells</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <span>Reduced battery life due to thermal stress</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution Approach */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Solution Approach</h2>
              <div className="space-y-4">
                <p>
                  Our approach combined advanced materials research with innovative design principles to create a comprehensive thermal management solution.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Phase 1: Research & Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Thermal modeling and simulation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Material property analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Baseline performance measurement</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Phase 2: Design & Prototyping</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Advanced cooling channel design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Prototype development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Laboratory testing</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Implementation</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed implementation steps and methodology would be described here, including technical specifications, testing procedures, and validation methods.
                </p>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-4 bg-muted rounded w-4/6"></div>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Results & Impact</h2>
              <div className="space-y-4">
                <p>
                  The implementation of the advanced cooling system resulted in significant improvements across multiple performance metrics, validating our design approach and methodology.
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    Charts, graphs, and detailed analysis would be included here to demonstrate the impact and effectiveness of the solution.
                  </p>
                  <div className="h-48 bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground">Performance Chart Placeholder</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Lessons Learned</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm">Early prototyping and testing are crucial for identifying design flaws and optimization opportunities.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm">Cross-functional collaboration between materials science and mechanical engineering teams accelerates innovation.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm">Comprehensive thermal modeling provides valuable insights but must be validated with real-world testing.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Future Work */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Future Work</h2>
              <div className="space-y-3">
                <p>
                  Building on the success of this project, several areas for future development and optimization have been identified:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </section>
            // 1. Image + Text Side-by-Side Layout
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Design Process</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <div className="space-y-4">
      <h3 className="text-xl font-medium">Initial Concept Development</h3>
      <p className="text-muted-foreground">
        Our initial design phase focused on understanding the thermal dynamics of battery systems. Through extensive research and analysis, we identified key areas for improvement.
      </p>
      <div className="flex gap-2">
        <Badge variant="outline">Research</Badge>
        <Badge variant="outline">Analysis</Badge>
        <Badge variant="outline">CAD Modeling</Badge>
      </div>
    </div>
    <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
      <div className="text-center space-y-2">
        <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Design Process Image</p>
      </div>
    </div>
  </div>
</section>

// 2. Image + Text Stacked Layout
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Prototype Development</h2>
  <Card>
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Prototype Assembly Image</p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Assembly & Testing Phase</h3>
          <p className="text-muted-foreground">
            The prototype was assembled using advanced manufacturing techniques, incorporating our novel cooling channel design. Initial testing revealed promising results with significant temperature reductions.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>3 weeks development</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>4 team members</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>15 test iterations</span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</section>

// 3. Before/After Comparison
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Before vs After Comparison</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Before Implementation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <BarChart3 className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Original System Performance</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Cooling Efficiency</span>
            <span className="text-red-600">65%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Temperature Variation</span>
            <span className="text-red-600">±8°C</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Energy Consumption</span>
            <span className="text-red-600">High</span>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          After Implementation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <TrendingUp className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Optimized System Performance</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Cooling Efficiency</span>
            <span className="text-green-600">90%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Temperature Variation</span>
            <span className="text-green-600">±2°C</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Energy Consumption</span>
            <span className="text-green-600">Low</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

// 4. Image Gallery with Tabs
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Development Gallery</h2>
  <Tabs defaultValue="design" className="w-full">
    <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger value="design">Design</TabsTrigger>
      <TabsTrigger value="prototype">Prototype</TabsTrigger>
      <TabsTrigger value="testing">Testing</TabsTrigger>
      <TabsTrigger value="results">Results</TabsTrigger>
    </TabsList>
    
    <TabsContent value="design" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">CAD Model View 1</p>
          </div>
        </div>
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">CAD Model View 2</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Initial design concepts and CAD modeling phase showing the innovative cooling channel geometry.
      </p>
    </TabsContent>
    
    <TabsContent value="prototype" className="space-y-4">
      <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
        <div className="text-center space-y-2">
          <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Prototype Assembly</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Physical prototype construction using advanced manufacturing techniques.
      </p>
    </TabsContent>
    
    <TabsContent value="testing" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-8 h-8 mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Test Setup</p>
          </div>
        </div>
        <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-8 h-8 mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Data Collection</p>
          </div>
        </div>
        <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-8 h-8 mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Analysis</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Comprehensive testing procedures and data collection methods.
      </p>
    </TabsContent>
    
    <TabsContent value="results" className="space-y-4">
      <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
        <div className="text-center space-y-2">
          <BarChart3 className="w-12 h-12 mx-auto text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Performance Results Chart</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Final performance metrics and validation results demonstrating system improvements.
      </p>
    </TabsContent>
  </Tabs>
</section>

// 5. Team Member Spotlight
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Team Spotlight</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-medium">Dr. Sarah Chen</h3>
            <p className="text-sm text-muted-foreground">Lead Materials Engineer</p>
            <p className="text-xs text-muted-foreground">
              Specialized in thermal management systems with 8+ years of experience in automotive applications.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/sarahchen" target="_blank">
                Connect <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-medium">Mark Rodriguez</h3>
            <p className="text-sm text-muted-foreground">Mechanical Design Engineer</p>
            <p className="text-xs text-muted-foreground">
              Expert in CAD modeling and prototype development with focus on cooling system optimization.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/markrodriguez" target="_blank">
                Connect <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-medium">Lisa Wang</h3>
            <p className="text-sm text-muted-foreground">Test Engineer</p>
            <p className="text-xs text-muted-foreground">
              Responsible for validation testing and performance analysis of thermal management systems.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/lisawang" target="_blank">
                Connect <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

// 6. Progress Timeline
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Project Timeline</h2>
  <div className="space-y-6">
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
      <div className="absolute left-2 top-4 w-0.5 h-16 bg-border"></div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Research Phase</h3>
          <Badge variant="secondary">Week 1-2</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Literature review and thermal analysis of existing battery cooling systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center space-y-2">
              <ImageIcon className="w-8 h-8 mx-auto text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Research Documentation</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Literature Review</span>
              <span className="text-green-600">Complete</span>
            </div>
            <Progress value={100} className="h-2" />
            <div className="flex justify-between text-sm">
              <span>Thermal Analysis</span>
              <span className="text-green-600">Complete</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
      <div className="absolute left-2 top-4 w-0.5 h-16 bg-border"></div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Design & Modeling</h3>
          <Badge variant="secondary">Week 3-5</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          CAD modeling and simulation of the new cooling system design.
        </p>
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImageIcon className="w-8 h-8 mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground">CAD Model Renders</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Testing & Validation</h3>
          <Badge variant="secondary">Week 6-8</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Prototype testing and performance validation against baseline systems.
        </p>
      </div>
    </div>
  </div>
</section>

// 7. Quote/Testimonial Block
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Industry Impact</h2>
  <Card className="border-l-4 border-l-blue-500">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <Quote className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
        <div className="space-y-3">
          <blockquote className="text-lg italic">
            "This innovative cooling system represents a significant breakthrough in battery thermal management. The 25% improvement in cooling efficiency will have substantial impact on electric vehicle performance and longevity."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
              <Users className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Dr. Michael Thompson</p>
              <p className="text-sm text-muted-foreground">Director of Engineering, Advanced Battery Systems</p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</section>

// 8. Technical Specifications Table
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Technical Specifications</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>System Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-sm font-medium">Cooling Capacity</span>
            <span className="text-sm">15 kW</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-sm font-medium">Operating Temperature</span>
            <span className="text-sm">-20°C to +60°C</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-sm font-medium">Flow Rate</span>
            <span className="text-sm">8 L/min</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm font-medium">Pressure Drop</span>
            <span className="text-sm">0.2 bar</span>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
      <div className="text-center space-y-2">
        <BarChart3 className="w-12 h-12 mx-auto text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Performance Comparison Chart</p>
      </div>
    </div>
  </div>
</section>

// 9. Call-to-Action/Next Steps
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">What's Next?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h3 className="font-medium">Interested in Collaboration?</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            We're always looking for partners and collaborators to push the boundaries of thermal management technology.
          </p>
          <Button className="w-full">
            Get in Touch
          </Button>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Download className="w-6 h-6 text-blue-500" />
            <h3 className="font-medium">Download Resources</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Access our technical papers, CAD files, and detailed performance data.
          </p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full" size="sm">
              Technical Report (PDF)
            </Button>
            <Button variant="outline" className="w-full" size="sm">
              CAD Files (STEP)
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

// 10. Alert/Highlight Boxes
<Alert className="border-blue-200 ">
  <Lightbulb className="h-4 w-4" />
  <AlertDescription>
    <strong>Key Insight:</strong> The breakthrough came when we realized that conventional cooling channels were creating turbulent flow patterns. Our new design maintains laminar flow while maximizing heat transfer surface area.
  </AlertDescription>
</Alert>

<Alert className="border-green-200 ">
  <CheckCircle className="h-4 w-4" />
  <AlertDescription>
    <strong>Success Metric:</strong> The system exceeded all performance targets, achieving 25% better cooling efficiency than originally projected.
  </AlertDescription>
</Alert>

<Alert className="border-orange-200 ">
  <AlertTriangle className="h-4 w-4" />
  <AlertDescription>
    <strong>Challenge:</strong> Initial prototypes showed promising results but required three design iterations to achieve optimal flow distribution across all battery cells.
  </AlertDescription>
</Alert>

          </article>
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}