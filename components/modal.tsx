import { motion } from "framer-motion";
import { useEffect, MouseEvent } from "react";

// Define the ProjectProps interface
type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  githubLink: string;
  videoLink?: string;
  images: string[];
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectProps | null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  // Close modal when pressing escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !project) return null;

  // Function to close modal when clicking outside the content
  const handleOverlayClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={handleOverlayClick} // Close when clicking outside the modal content
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90%] p-8 relative animate-modalShow transition-transform">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 text-xl transition"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Technologies Used:
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, index: number) => (
              <li
                key={index}
                className="bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Links to GitHub and Video Demo */}
        <div className="mb-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 dark:text-blue-300 underline text-lg mr-4 transition-transform hover:scale-105"
          >
            View on GitHub
          </a>
          {project.videoLink && (
            <a
              href={project.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-300 underline text-lg transition-transform hover:scale-105"
            >
              Watch Video Demo
            </a>
          )}
        </div>

        {/* Scrollable area for more images */}
        <div className="overflow-y-auto max-h-60 grid grid-cols-2 gap-4 mb-6">
          {project.images.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={`Project image ${index}`}
              className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-105"
            />
          ))}
        </div>

        {/* Footer (Optional) */}
        <div className="text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-800 dark:bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
}
