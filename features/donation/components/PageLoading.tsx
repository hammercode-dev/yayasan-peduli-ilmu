import React from 'react';

function PageLoading() {
  return (
    <div className="min-h-screen">
      {/* Back Button Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-muted animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 bg-muted rounded animate-pulse"></div>
                <div className="w-48 h-3 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          {/* Image */}
          <div className="aspect-video bg-muted animate-pulse"></div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title */}
            <div className="h-6 w-2/3 bg-muted rounded animate-pulse"></div>

            {/* Progress */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <div className="w-24 h-4 bg-muted rounded animate-pulse"></div>
                <div className="w-12 h-4 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="w-full h-4 bg-muted/50 rounded-full overflow-hidden">
                <div className="h-4 w-1/2 bg-muted animate-pulse rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-2 text-center">
                    <div className="h-6 w-1/2 mx-auto bg-muted rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 mx-auto bg-muted rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Details */}
            <div className="space-y-6">
              <div className="h-5 w-1/3 bg-muted rounded animate-pulse"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="p-4 bg-muted/30 rounded-lg space-y-2">
                    <div className="h-3 w-1/2 bg-muted rounded animate-pulse"></div>
                    <div className="h-5 w-3/4 bg-muted rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-muted/30 rounded-lg space-y-2">
                <div className="h-3 w-1/2 bg-muted rounded animate-pulse"></div>
                <div className="h-5 w-full bg-muted rounded animate-pulse"></div>
                <div className="h-5 w-4/5 bg-muted rounded animate-pulse"></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <div className="h-5 w-1/3 bg-muted rounded animate-pulse"></div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-3 h-3 bg-muted rounded-full mt-2"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-1/4 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-muted rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Methods */}
            <div className="space-y-6">
              <div className="h-5 w-1/3 bg-muted rounded animate-pulse"></div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="bg-muted/50 p-6 rounded-xl space-y-4">
                  <div className="h-5 w-1/4 bg-muted rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-muted rounded animate-pulse"></div>
                    <div className="h-5 w-full bg-muted rounded animate-pulse"></div>
                    <div className="h-5 w-4/5 bg-muted rounded animate-pulse"></div>
                    <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-muted rounded animate-pulse"></div>
                    <div className="h-5 w-full bg-muted rounded animate-pulse"></div>
                    <div className="h-5 w-4/5 bg-muted rounded animate-pulse"></div>
                    <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="bg-primary/10 p-6 rounded-xl space-y-4">
              <div className="h-5 w-1/3 bg-muted rounded animate-pulse"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-1/2 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 w-1/3 bg-muted rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="h-10 flex-1 bg-muted rounded animate-pulse"></div>
                <div className="h-10 flex-1 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLoading;
