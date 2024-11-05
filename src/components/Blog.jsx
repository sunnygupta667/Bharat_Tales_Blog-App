import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Incredible India Explorer",
    image: "https://images.unsplash.com/photo-1596709097416-6d4206796022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5jcmVkaWJsZSUyMGluZGlhJTIwZXhwbG9yZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Explore India’s landscapes, traditions, and culture.",
  },
  {
    id: 2,
    title: "Journey Through India",
    image: "https://media.istockphoto.com/id/1140616171/photo/assisting-a-friend.webp?a=1&b=1&s=612x612&w=0&k=20&c=vaNKrL2wURLAGsOxztJCoghn0MpEZd0i-lR1ZZEx03I=",
    description: "Discover India’s rich history and scenic wonders.",
  },
  {
    id: 3,
    title: "Festivals of India",
    image: "https://media.istockphoto.com/id/454353339/photo/girl-making-rangoli-and-decorating-with-oil-lamps-for-diwali.webp?a=1&b=1&s=612x612&w=0&k=20&c=bkr-8bzMxD2yC_jdnD1Sn07e3okzn123XXxMwuTT3Lk=",
    description: "Celebrate the vibrant festivals of India from Diwali to Holi.",
},
{
    id: 4,
    title: "India’s Spiritual Heritage",
    image: "https://images.unsplash.com/photo-1718219155759-3d5fb012419f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEluZGlhJUUyJTgwJTk5cyUyMFNwaXJpdHVhbCUyMEhlcml0YWdlfGVufDB8fDB8fHww",
    description: "Dive into India’s spiritual roots with ancient practices and beliefs.",
},
{
    id: 5,
    title: "Culinary Journey Across India",
    image: "https://plus.unsplash.com/premium_photo-1699316113667-2d146539bad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEN1bGluYXJ5JTIwSm91cm5leSUyMEFjcm9zcyUyMEluZGlhfGVufDB8fDB8fHww",
    description: "Taste the diverse flavors of India’s regional cuisines.",
},
{
    id: 6,
    title: "Art and Craft of India",
    image: "https://images.unsplash.com/photo-1470487274665-5c67dce2beca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJ0JTIwYW5kJTIwQ3JhZnQlMjBvZiUyMEluZGlhfGVufDB8fDB8fHww",
    description: "Explore India’s rich artistic heritage and handicrafts.",
},
{
    id: 7,
    title: "Traditional Dance Forms of India",
    image: "https://media.istockphoto.com/id/184329009/photo/classical-indian-kuchipudi-dancer.webp?a=1&b=1&s=612x612&w=0&k=20&c=ACu-EX4Xsha_W_Nj_twziOGLJoeBBwo-Nmj3DlSy5us=",
    description: "Discover the classical and folk dance forms that reflect Indian heritage.",
},
{
    id: 8,
    title: "Iconic Monuments of India",
    image: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SWNvbmljJTIwTW9udW1lbnRzJTIwb2YlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Take a journey through India's famous historical sites and monuments.",
},
{
    id: 9,
    title: "Languages of India",
    image: "https://images.unsplash.com/photo-1657302155485-790b74d0b5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZ3VhZ2VzJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Learn about the linguistic diversity of India with 22 official languages.",
},
{
    id: 10,
    title: "Ayurveda and Wellness in India",
    image: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXl1cnZlZGElMjBhbmQlMjBXZWxsbmVzcyUyMGluJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
    description: "Experience India’s traditional wellness practices rooted in Ayurveda.",
},
{
    id: 11,
    title: "Indian Wedding Traditions",
    image: "https://images.unsplash.com/photo-1601121868898-4581104b29de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwV2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Uncover the customs and grandeur of traditional Indian weddings.",
},
{
    id: 12,
    title: "Textile Traditions of India",
    image: "https://plus.unsplash.com/premium_photo-1725456680671-464ffa524c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRleHRpbGUlMjBUcmFkaXRpb25zJTIwb2YlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Admire the diversity of Indian textiles, from silk to cotton weaves.",
},
{
    id: 13,
    title: "Indian Cinema: Bollywood-Beyond",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwQ2luZW1hJTNBJTIwQm9sbHl3b29kJTIwQmV5b25kfGVufDB8fDB8fHww",
    description: "Explore India’s film industry, from Bollywood to regional cinema.",
},
{
    id: 14,
    title: "Yoga and Meditation in India",
    image: "https://images.unsplash.com/photo-1463559830741-e117d53be7c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8WW9nYSUyMGFuZCUyME1lZGl0YXRpb24lMjBpbiUyMEluZGlhfGVufDB8fDB8fHww",
    description: "Learn about the origins of yoga and meditation in India.",
},
{
    id: 15,
    title: "Folk Music of India",
    image: "https://plus.unsplash.com/premium_photo-1718570256549-702fc900db10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9sayUyMG11c2ljJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Discover India’s soulful folk music, passed down through generations.",
},
{
    id: 16,
    title: "Architecture of Ancient India",
    image: "https://images.unsplash.com/photo-1705861145781-d192048a3617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFyY2hpdGVjdHVyZSUyMG9mJTIwQW5jaWVudCUyMEluZGlhfGVufDB8fDB8fHww",
    description: "Marvel at the architectural wonders from India’s ancient civilizations.",
},
{
    id: 17,
    title: "Sacred Rivers of India",
    image: "https://images.unsplash.com/photo-1706186924707-d2acc3bd979a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2FjcmVkJTIwUml2ZXJzJTIwb2YlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Understand the cultural significance of India’s sacred rivers.",
},
{
    id: 18,
    title: "India’s Diverse Clothing Styles",
    image: "https://media.istockphoto.com/id/1205299877/photo/portrait-of-confident-woman-in-sari.webp?a=1&b=1&s=612x612&w=0&k=20&c=7o4WM_wyTTospa79c0tfFMXZDaB0KiCuXa82E0Lnk_U=",
    description: "Explore the variety of traditional clothing styles across India.",
},
{
    id: 19,
    title: "Indian Mythology and Legends",
    image: "https://media.istockphoto.com/id/1213718422/vector/lord-rama-with-his-wife-sita-and-brother-laxman-illustration.jpg?s=612x612&w=0&k=20&c=7HK6sk_ipDvWCOyKPpQe7oy3f-BnUWyeitPP_SjgfrA=",
    description: "Delve into India’s mythology, filled with fascinating gods and heroes.",
},
{
    id: 20,
    title: "Eco-Tourism in India",
    image: "https://media.istockphoto.com/id/2154118964/photo/young-man-admiring-view-at-dolphins-nose-kodaikanal-tamilnadu.webp?a=1&b=1&s=612x612&w=0&k=20&c=jtt1-XkfixDIrx2ISo5Obj31VPQgC4nqT_j5ra1bAMw=",
    description: "Discover India’s eco-tourism spots promoting sustainable travel.",
},
{
    id: 21,
    title: "Indian Martial Arts and Sports",
    image: "https://media.istockphoto.com/id/641118744/photo/batsman-on-the-stadium-in-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=n3CMktnHveGHZ9dipmnOPzckuDh_5SyV6bVS2yPKX50=",
    description: "Explore India’s traditional martial arts and indigenous sports.",
},

];

const Blogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-20 bg-slate-200 ">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-grey-800">Read Our Blogs</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-x hover:shadow-gray-600 glow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
            />
            
            <div className="p-6  flex flex-col justify-between">
              <h2 className="text-xl font-bold text-[#333] mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              
              <Link
                to={`/blog/${post.id}`}
                className="inline-block bg-gradient-to-r from-[#ff7a18] to-[#f6d365] text-white text-center font-semibold py-2 px-4 mt-6 rounded-lg hover:bg-gradient-to-l hover:from-[#ff7a18] hover:to-[#f6d365] transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
            
            {/* Stylish decoration at the top of the card */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff7a18] via-[#f6d365] to-[#ff7a18]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
