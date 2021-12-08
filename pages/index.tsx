//import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data'

const index = () => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">I am currently pursuing a Software Engineer education from Software University with main focus on JavaScript. I have 1+ year of experience in Web Development, where I have built several small one page applications to practise newly learned programming skills. </h5>
      <div 
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" 
        style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map(service=> (
              <div className="bg-gray-200 rounded-lg lf:col-span-1 dark:bg-dark-200">
                
                <ServiceCard service={service} />
              </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   // calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   // calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services);
  
//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }
