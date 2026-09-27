export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}
