import "./Meetings.scss";

export default function Meeting({ type }) {
  return (
    <details className="border bg-primary p-2 text-white fs-6 rounded-3 ">
      <summary className="text-capitalize meeting__header">
        {type} Meetings
      </summary>
      <ul>
        <li>Meeting 1</li>
        <li>Meeting 2</li>
        <li>Meeting 3</li>
      </ul>
    </details>
  );
}
