"use client";

import React from "react";

export function Timeline() {
  const start = new Date(2024, 4, 1);
  const end = new Date(2025, 7, 31);

  const months = [];
  const d = new Date(start);
  while (d <= end) {
    months.push({
      key: `${d.getFullYear()}-${d.getMonth() + 1}`,
      label: d.toLocaleString(undefined, { month: "short" }),
    });
    d.setMonth(d.getMonth() + 1);
  }

  const firstHalfCount = 8;
  const totalCount = 16;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        
        {/* Header */}
        <div className="space-y-1.5 mb-4">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            16-Month Internship Timeline
          </div>
          <p className="text-sm text-muted-foreground">
            May 2024 → Aug 2025 
          </p>
        </div>

        {/* Combined Timeline Bar with Month Markers */}
        <div className="relative mb-7">
          {/* Background bar */}
          <div className="relative w-full h-12 rounded-md bg-secondary overflow-hidden">
            {/* First half */}
            <div
              className="absolute left-0 top-0 h-full bg-amber-500"
              style={{ width: "50%" }}
            />
            {/* Second half */}
            <div
              className="absolute right-0 top-0 h-full bg-orange-500 "
              style={{ width: "50%" }}
            />
            {/* Center divider */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-border transform -translate-x-px" />
          </div>
          
          {/* Month markers overlay */}
          <div className="absolute -bottom-6 left-0 right-0">
            <div className="grid" style={{ gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))` }}>
              {months.map((m, i) => (
                <div key={m.key} className="flex flex-col items-center">
                  <div className="text-xs text-muted-foreground">
                    {m.label}
                    {i === 0 && <span className="ml-1">'24</span>}
                    {i === 8 && <span className="ml-1">'25</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <h4 className="text-sm font-medium">Product Development Intern</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-3">May-Dec 2024 • 8 months</p>
            <p className="text-sm text-muted-foreground">
              Battery cold plate development and testing for Ford, GM, and Jaguar Land Rover.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 " />
              <h4 className="text-sm font-medium">Material R&D Engineering Intern</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Jan-Aug 2025 • 8 months</p>
            <p className="text-sm text-muted-foreground">
              Advanced materials joining technologies research for automotive products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;