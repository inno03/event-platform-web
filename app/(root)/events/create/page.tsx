import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="py-5 bg-center bg-cover bg-primary-50 bg-dotted-pattern md:py-10">
        <h3 className="text-center wrapper h3-bold sm:text-left">Create Event</h3>
      </section>

      <div className="my-8 wrapper">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent