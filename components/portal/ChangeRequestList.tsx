type ChangeRequest = {
  id: string;
  message: string;
  status: "open" | "in_progress" | "done";
  created_at: string;
};

const statusLabel: Record<ChangeRequest["status"], string> = {
  open: "Open",
  in_progress: "In progress",
  done: "Done",
};

const statusStyle: Record<ChangeRequest["status"], string> = {
  open: "border-clay/30 bg-clay/10 text-clay",
  in_progress: "border-border bg-background text-foreground",
  done: "border-border bg-background text-muted",
};

export function ChangeRequestList({ requests }: { requests: ChangeRequest[] }) {
  if (requests.length === 0) {
    return (
      <p className="mt-6 text-sm text-muted">
        No change requests yet — anything you send will show up here.
      </p>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {requests.map((request) => (
        <div
          key={request.id}
          className="rounded-xl border border-border bg-surface p-4 text-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-foreground">{request.message}</p>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyle[request.status]}`}
            >
              {statusLabel[request.status]}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            {new Date(request.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
