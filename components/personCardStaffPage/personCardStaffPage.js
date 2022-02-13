import EmailIcon from "./mail.svg"

export default function PersonCardStaffPage(person) {
  return (
    <li key={person.name}>
      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
        <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <img
            className="object-cover shadow-lg rounded-lg"
            src={person.imageUrl}
            alt=""
          />
        </div>
        <div className="sm:col-span-2">
          <div className="space-y-4">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h3>{person.name}</h3>
              <p className="text-blue">{person.role}</p>
            </div>
            <div className="text-lg">
              <p className="text-gray-500">{person.bio}</p>
            </div>
          </div>
          <div className="flex">
            <EmailIcon className="w-5" />
            {person.email ?? "No email"}
          </div>
        </div>
      </div>
    </li>
  );
}
