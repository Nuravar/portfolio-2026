"use client";

import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import TeamExperience from "@/components/experience-list";
import SkillsSection from "@/components/skill-section";
import ProjectGrid from "@/components/project-card";
import Footer from "@/components/footer";
import { Home } from "lucide-react";
import GravityGrid from "@/components/gravity-grid";
import LocationAndTimeDisplay from "@/components/location-indicator";
import ResumeEmailButtons from "@/components/resume-email-btn";

export default function HomePage() {
  const [isOrange, setIsOrange] = useState(false);

  const toggleColor = () => setIsOrange(!isOrange);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        {/* Top header with breadcrumb and mobile sidebar trigger */}
        <div className="flex h-16 items-center justify-between px-4 lg:px-6 border-b border-neutral-800">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Home className="w-3 h-3 mr-1" />
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="lg:hidden">
            <SidebarTrigger />
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-8 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Engineering student with focus on materials research and mechanical design.
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I develop and prototype engineering solutions through advanced materials research,
              embedded systems, and mechanical design. Currently working on electrical vehicle
              battery cooling optimization and brazing alloys at{" "}
              <strong>Dana Incorporated</strong>.<br />
              In my free time, I enjoy playing the violin, graphic design, and playing soccer.
            </p>

            <small className="flex items-center gap-2 text-muted-foreground">
              <div className="relative">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isOrange ? "bg-orange-400" : "bg-green-400"
                  } animate-pulse`}
                  style={{
                    filter: isOrange
                      ? "drop-shadow(0 0 4px rgba(251, 146, 60, 0.6))"
                      : "drop-shadow(0 0 4px rgba(74, 222, 128, 0.6))",
                  }}
                />
                <div
                  className={`absolute inset-0 w-2 h-2 rounded-full ${
                    isOrange ? "bg-orange-400" : "bg-green-400"
                  } animate-ping opacity-20`}
                />
              </div>
              <span>
                Currently seeking <strong>Summer 2026 Engineering Internships</strong>
              </span>
            </small>

            <ResumeEmailButtons />
            <LocationAndTimeDisplay />
            <GravityGrid />
            <TeamExperience />
            <SkillsSection />
            <ProjectGrid />
          </div>
        </div>

        <Footer />
      </main>
    </SidebarProvider>
  );
}
