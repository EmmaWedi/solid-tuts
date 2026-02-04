import { For } from "solid-js";
import { IoEllipsisVertical } from "solid-icons/io";
import { Project } from "../../types/types";
import { projectsData } from "../../types/data";

const ProjectsTable = () => {
  return (
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h3 class="font-bold text-gray-800 text-xl">Projects</h3>
          <p class="text-sm text-gray-500 flex items-center gap-2 mt-1 font-medium">
            <span class="w-2 h-2 rounded-full bg-green-500"></span> 30 done this
            month
          </p>
        </div>
        <button class="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-colors">
          <IoEllipsisVertical size={20} />
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-xs text-gray-400 uppercase border-b border-gray-100">
              <th class="text-left font-bold pb-4 pl-2 w-1/3">Companies</th>
              <th class="text-left font-bold pb-4">Members</th>
              <th class="text-left font-bold pb-4">Budget</th>
              <th class="text-left font-bold pb-4 w-1/4">Completion</th>
            </tr>
          </thead>
          <tbody>
            <For each={projectsData}>
              {(project: Project) => (
                <tr class="group hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0">
                  <td class="py-5 pl-2">
                    <div class="flex items-center gap-4">
                      <div
                        class={`w-10 h-10 rounded-xl ${project.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}
                      >
                        {project.companyAbbr}
                      </div>
                      <span class="font-bold text-gray-700 text-sm">
                        {project.name}
                      </span>
                    </div>
                  </td>
                  <td class="py-5">
                    <div class="flex -space-x-2">
                      <For each={Array(project.members).fill(0)}>
                        {() => (
                          <img
                            class="w-8 h-8 rounded-full border-2 border-white"
                            src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                            alt="User"
                          />
                        )}
                      </For>
                    </div>
                  </td>
                  <td class="py-5 text-sm text-gray-600 font-bold">
                    {project.budget}
                  </td>
                  <td class="py-5 pr-4">
                    <div class="flex items-center gap-3">
                      <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          class={`h-full rounded-full transition-all duration-1000 ${project.completion === 100 ? "bg-green-400" : "bg-teal-400"}`}
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                      <span class="text-xs font-bold text-gray-500 w-8 text-right">
                        {project.completion}%
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
