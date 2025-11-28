interface AuroraUIProps {
  layout: (props: { children: React.ReactNode }) => React.ReactNode;
  children: React.ReactNode;
}

export const AuroraUI = (props: AuroraUIProps) => {
  const { layout, children } = props;

  return <>Aurora UI {layout ? layout({ children }) : children}</>;
};
