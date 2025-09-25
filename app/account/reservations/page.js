import ReservationList from "../../_components/ReservationList";
import { auth } from "../../_lib/auth";
import { getBookings } from "../../_lib/data-service";
export const metadata = {
  title: "Reservations",
};
const page = async () => {
  const session = await auth();
  const reservations = await getBookings(session.user.guestId);
  const bookings = reservations;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
};

export default page;
