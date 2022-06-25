import Menu from "@/templates/Menu";

const withLayout = (WrappedComponent: any) => {
  return (props: any) => (
    <>
      <Menu />
      <WrappedComponent {...props} />
    </>
  );
};

export default withLayout;
