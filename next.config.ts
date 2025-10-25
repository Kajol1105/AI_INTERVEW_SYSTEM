import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    // This configuration for TypeScript is still supported:
    typescript: {
        // Disables TypeScript error checking during the build process
        ignoreBuildErrors: true,
    },

    // NOTE: The 'eslint' key has been removed.
    // ESLint configuration should now be managed entirely in a separate file (e.g., .eslintrc.json)
    // or by command-line flags. Removing it silences the warnings.
};

export default nextConfig;
