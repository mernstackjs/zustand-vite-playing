import AddStudent from "../components/AddStudent";
import StudentsList from "../components/StudentsList";

export default function Students() {
  return (
    <div className="p-5">
      <h1>Students Managements</h1>

      <div className="grid gap-3 grid-cols-3">
        <AddStudent />
        <StudentsList />
      </div>
    </div>
  );
}
