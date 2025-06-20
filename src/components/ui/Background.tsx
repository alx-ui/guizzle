export function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-guizzle pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(111,139,225,0.15)_0%,rgba(7,30,97,0)_60%)] pointer-events-none"></div>
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-guizzle-light/20 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-guizzle/20 blur-[100px] pointer-events-none"></div>
    </>
  );
}
