import "./Meetings.scss";

export default function Meeting({ type }) {
  return (
    <details className="border bg-primary p-2 text-white fs-6 rounded-3 meeting__header">
      <summary className="text-capitalize">{type} Meetings</summary>
      <ul>
        <li>Meeting 1</li>
        <li>Meeting 2</li>
        <li>Meeting 3</li>
      </ul>
    </details>
  );
}
