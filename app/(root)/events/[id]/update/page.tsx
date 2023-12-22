import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <>
      <section className="py-5 bg-center bg-cover bg-primary-50 bg-dotted-pattern md:py-10">
        <h3 className="text-center wrapper h3-bold sm:text-left">Update Event</h3>
      </section>

      <div className="my-8 wrapper">
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </>
  )
}

export default UpdateEvent