import { AuroraUI } from "./AuroraUI";

interface AuroraProviderProps {
  children: React.ReactNode;
  layout: (props: { children: React.ReactNode }) => React.ReactNode;
}

export const AuroraProvider = (props: AuroraProviderProps) => {
  const { children, layout } = props;

  return (
    <>
      <AuroraUI layout={layout}>{children}</AuroraUI>
    </>
  );
};
