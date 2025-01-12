import TableStaffDiterima from "@/components/molecules/TableStaffDiterima";

export default function DinasName() {
  return (
    <main className="flex items-center justify-center px-2 lg:px-10">
      <div className="flex flex-col justify-center px-5 py-10 mx-auto rounded-lg table-calon-staff">
        <h1 className="text-xl font-semibold lg:text-2xl text-slate-200">
            Staff Yang Diterima
        </h1>
        <TableStaffDiterima />
      </div>
    </main>
  );
}
