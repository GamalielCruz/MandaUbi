import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center"> 
            <p className="text-1xl font-normal text-gray-900">
            <h2 className="mb-1 border-y text-2xl font-bold text-gray-100 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.7),transparent)1] md:text-4xl"></h2>
              “¡Las invitaciones quedaron preciosas! Superaron mis expectativas.{" "}
              <em className="italic text-gray-500">El proceso fue súper sencillo y la atención al cliente excelente</em>,
              ¡Muchas gracias!
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Maria Lopez</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                Novia
              </a>
            </div>
          </div>
          <h2 className="mb-1 border-y text-2xl font-bold text-gray-100 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.7),transparent)1] md:text-4xl"></h2>
        </div>
      </div>
    </section>
  );
}
