interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="border-t border-black/10 pt-6">
      <p className="text-xs tracking-[0.3em] text-[#6e7064] uppercase">
        {title}
      </p>

      <h2 className="mt-4 text-6xl font-bold leading-none text-[#1c1b17]">
        {value}
      </h2>
    </div>
  );
}