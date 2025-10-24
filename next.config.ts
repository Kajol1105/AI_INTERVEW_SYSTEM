import type{NextConfig} from "next"

const nextConfig = {
    // 1. Configuration for TypeScript (still correct)
    typescript: {
        // Disables TypeScript error checking during the build process
        ignoreBuildErrors: true,
    },

    // 2. Reverting to the correct, nested 'eslint' structure.
    // This is the officially expected structure for this property.
    eslint: {
        // Disables ESLint error checking during the build process
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;