export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="size-5 rounded-full animate-spin border-2 after:absolute after:size-3 after:bg-secondary-white after:-translate-x-1 after:rotate-[30deg]" />
    </div>
  )
}
