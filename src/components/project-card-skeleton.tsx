import ExternalIcon from "../assets/icons/External-link.svg?react";
import GithubIcon from "../assets/icons/languages/github.svg?react";
import IconLink from "./icon-link";
import ProjectStatus from "./project-status";
import Skeleton from "./skeleton";

export default function ProjectCardSkeleton() {
	return (
		<article
			className={`
        bg-cinza-400 rounded-5 transition duration-50 transform-3d border border-azul
        flex lg:flex-col gap-5 lg:gap-0
        px-5 lg:px-7.5 py-5 lg:py-2.5 lg:max-w-[500px]`}
		>
			<Skeleton
				className="hidden aspect-video object-cover w-full max-h-[300px] sm:block sm:max-w-[250px] lg:max-w-full
          md:max-h-[350px] md:w-full lg:mt-3	
          justify-self-start border border-white"
			/>

			<div className="flex flex-col w-full h-full">
				<div className="flex flex-col gap-2.5 lg:mt-4.5 mb-6 overflow-hidden">
					<Skeleton className="w-1/5 h-5" rounded="sm" />
					<Skeleton className="w-2/5 h-5" rounded="sm" />
				</div>
				<div className="flex items-center flex-wrap gap-3.75 lg:mb-8">
					<Skeleton className="w-1/5 rounded-5 px-2.5 py-4" rounded="sm" />
					<Skeleton className="w-1/5 rounded-5 px-2.5 py-4" rounded="sm" />
				</div>
				<div className="flex items-center justify-between border-t border-t-white mt-5 lg:mt-auto pt-4">
					<div className="flex gap-4">
						<IconLink
							href="#"
							target="_blank"
							icon={ExternalIcon}
							className="flex items-center gap-1.5 bg-azul p-3 rounded-5 w-max"
							disabled
						>
							Website
						</IconLink>
						<IconLink
							href="#"
							icon={GithubIcon}
							className="flex items-center gap-1.5 bg-transparent border border-cinza-100 p-3 rounded-5 w-max"
							disabled
						>
							More info
						</IconLink>
					</div>

					<ProjectStatus loading />
				</div>
			</div>
		</article>
	);
}
