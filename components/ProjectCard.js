import { Calendar, Student, Wrench, Truck, Path } from 'phosphor-react';

export default function ProjectCard({ title, description, href, icon }) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        {icon == 'calendar' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Scheduling System</span>
            <Calendar
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              weight="fill"
              size={42}
            />
          </div>
        )}
        {icon == 'student' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Class Roster</span>
            <Student
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              weight="fill"
              size={42}
            />
          </div>
        )}
        {icon == 'wrench' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Inventory Management System</span>
            <Wrench
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              weight="fill"
              size={42}
            />
          </div>
        )}
        {icon == 'truck' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Path Finding Algorithm</span>
            <Truck
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              weight="fill"
              size={42}
            />
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
