import Counter from "./Counter";

export const metadata = {
  title: " Counter Page | Next JS Static Metadata Export ",
  description:
    "  Example of Using Metadata in Client Components create client component in react and import in next js and declare metadata in next js page.tsx ",
};

const CounterPage = () => {
  return (
    <div className="mt-8">
      <Counter />
    </div>
  );
};

export default CounterPage;
