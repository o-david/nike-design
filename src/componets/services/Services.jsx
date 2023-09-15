import { services } from "../../constants"
import { ServiceCard } from "../servicecard/ServiceCard"

export const Services = () => {
  return (
    <section className="padding-x py-10">
        <section className="max-container flex justify-center flex-wrap gap-9">
{services.map((service) =>(
    <ServiceCard key={service.label} {...service}/>
))}
        </section>
    </section>
  )
}
