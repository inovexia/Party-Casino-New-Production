import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "bYhfEvVcxDkAnpe6JeaVdJ",
      token: "4xF7RA7XPhvx0IlzvB48zI7eF8qgh5I4wnmj42TDNUTP8HaahUDSesAGMXwINObpWG0J37hKUNSqozPkRsgA",
        version:
        process.env.node_env === "production"
          ? "production"
          : // @ts-ignore
          process.env.node_env === "staging"
          ? "staging"
          : // If not production or staging, then just use the latest
            // published version, regardless of tags
            undefined,
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
