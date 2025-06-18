import React from 'react';
import { ArrowLeft, MapPin, Building } from 'lucide-react';

function PageLoading() {
  return (
    <div className="min-h-screen">
      {/* Loading Header */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <div className="flex items-center text-white/70 mr-4">
              <ArrowLeft className={`h-5 w-5 mr-2`} />
              Kembali
            </div>
            <div className="w-16 h-6 bg-white/20 rounded-full animate-pulse"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="h-10 bg-white/20 rounded-lg mb-4 animate-pulse"></div>
              <div className="h-6 bg-white/15 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-6 bg-white/15 rounded-lg w-3/4 mb-4 animate-pulse"></div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-white/50" />
                <div className="h-5 bg-white/15 rounded w-48 animate-pulse"></div>
              </div>
            </div>
            <div className="lg:flex lg:justify-end">
              <div className="w-full lg:w-80 h-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-2 h-full">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-sm animate-pulse"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Loading Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 animate-pulse">
                      <Building className="h-10 w-10 text-white/50" />
                    </div>
                  </div>

                  {/* Loading Text */}
                  <div className="text-center relative z-10">
                    <div className="h-6 bg-white/20 rounded w-32 mb-2 animate-pulse"></div>
                    <div className="h-4 bg-white/15 rounded w-24 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Loading Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-full border border-primary-200">
            <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mr-2"></div>
            <span className="text-sm font-medium">Memuat data program...</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Loading */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Section Loading */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-muted rounded mr-3 animate-pulse"></div>
                  <div className="h-6 bg-muted rounded w-48 animate-pulse"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div className="h-4 bg-muted rounded w-16 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-12 animate-pulse"></div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-4 animate-pulse"></div>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="text-center">
                        <div className="h-8 bg-muted rounded w-32 mx-auto mb-2 animate-pulse"></div>
                        <div className="h-4 bg-muted rounded w-20 mx-auto animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Loading */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-muted rounded mr-3 animate-pulse"></div>
                  <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-5 h-5 bg-muted rounded mr-3 animate-pulse"></div>
                        <div>
                          <div className="h-4 bg-muted rounded w-20 mb-1 animate-pulse"></div>
                          <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-5 h-5 bg-muted rounded mr-3 animate-pulse"></div>
                        <div>
                          <div className="h-4 bg-muted rounded w-20 mb-1 animate-pulse"></div>
                          <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="h-5 bg-muted rounded w-40 mb-2 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form Loading */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-muted rounded mr-3 animate-pulse"></div>
                  <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {/* Donor Information Loading */}
                  <div className="space-y-4">
                    <div className="h-6 bg-muted rounded w-48 animate-pulse"></div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[1, 2].map((i) => (
                        <div key={i}>
                          <div className="h-4 bg-muted rounded w-24 mb-2 animate-pulse"></div>
                          <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="h-4 bg-muted rounded w-28 mb-2 animate-pulse"></div>
                      <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Donation Details Loading */}
                  <div className="space-y-4">
                    <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="h-12 bg-muted rounded-lg animate-pulse"
                        ></div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[1, 2].map((i) => (
                        <div key={i}>
                          <div className="h-4 bg-muted rounded w-32 mb-2 animate-pulse"></div>
                          <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evidence Upload Loading */}
                  <div className="space-y-4">
                    <div className="h-6 bg-muted rounded w-36 animate-pulse"></div>
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <div className="w-12 h-12 bg-muted rounded mx-auto mb-4 animate-pulse"></div>
                      <div className="h-4 bg-muted rounded w-48 mx-auto mb-2 animate-pulse"></div>
                      <div className="h-3 bg-muted rounded w-32 mx-auto animate-pulse"></div>
                    </div>
                  </div>

                  {/* Message Loading */}
                  <div>
                    <div className="h-4 bg-muted rounded w-32 mb-2 animate-pulse"></div>
                    <div className="h-24 bg-muted rounded w-full animate-pulse"></div>
                  </div>

                  {/* Submit Button Loading */}
                  <div className="flex gap-4 pt-4">
                    <div className="flex-1 h-12 bg-muted rounded-lg animate-pulse"></div>
                    <div className="flex-1 h-12 bg-muted rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Loading */}
          <div className="space-y-6">
            {/* Quick Actions Loading */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
                <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Payment Methods Loading */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="h-5 bg-muted rounded w-32 mb-3 animate-pulse"></div>
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-muted p-4 rounded-lg animate-pulse">
                        <div className="h-4 bg-background rounded w-48 mb-2"></div>
                        <div className="h-4 bg-background rounded w-32 mb-1"></div>
                        <div className="h-4 bg-background rounded w-40"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-5 bg-muted rounded w-24 mb-3 animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-muted p-3 rounded-lg animate-pulse">
                        <div className="h-4 bg-background rounded w-16 mb-1"></div>
                        <div className="h-3 bg-background rounded w-20"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Loading */}
            <div className="bg-secondary-600 text-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="h-5 bg-white/20 rounded w-32 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-4 h-4 bg-white/20 rounded mr-3 animate-pulse"></div>
                      <div className="h-4 bg-white/20 rounded w-32 animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="h-3 bg-white/15 rounded w-full mt-4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLoading;
