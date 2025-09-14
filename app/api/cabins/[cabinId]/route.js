import { getBookedDatesByCabinId, getCabin } from "../../../_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;
  console.log(cabinId);
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    console.log(cabin);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
}
