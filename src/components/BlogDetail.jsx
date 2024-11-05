import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Incredible India Explorer",
    image: "https://images.unsplash.com/photo-1596709097416-6d4206796022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5jcmVkaWJsZSUyMGluZGlhJTIwZXhwbG9yZXJ8ZW58MHx8MHx8fDA%3D",
    fullDescription: "India, a country of immense diversity, offers a wealth of experiences that span vibrant cities, remote villages, mountains, beaches, deserts, and forests. The journey through India reveals ancient temples, lush landscapes, and unique wildlife. It’s a country where modernity and history blend seamlessly, where every region has its own identity, and each culture has its own set of festivals, clothing, and food. As you explore Incredible India, you’ll discover the unmatched beauty of this land and the warm hospitality of its people. From Kashmir to Kanyakumari, this is a journey worth embarking upon."
  },
  {
    id: 2,
    title: "Journey Through India",
    image: "https://media.istockphoto.com/id/1140616171/photo/assisting-a-friend.webp?a=1&b=1&s=612x612&w=0&k=20&c=vaNKrL2wURLAGsOxztJCoghn0MpEZd0i-lR1ZZEx03I=",
    fullDescription: "The journey through India is unlike any other travel experience. It is a passage through time, revealing centuries-old architecture, traditions, and stories passed down through generations. India is home to diverse landscapes, from Himalayan peaks to vast deserts and tropical coastlines. Each journey unearths new layers of cultural, religious, and geographical diversity. Alongside these landscapes, bustling cities showcase India’s blend of the past and present, from ancient bazaars to modern skyscrapers. Embrace the unforgettable sights, sounds, and flavors of a journey through this vibrant nation, and witness the essence of India’s soul."
  },
  {
    id: 3,
    title: "Festivals of India",
    image: "https://media.istockphoto.com/id/454353339/photo/girl-making-rangoli-and-decorating-with-oil-lamps-for-diwali.webp?a=1&b=1&s=612x612&w=0&k=20&c=bkr-8bzMxD2yC_jdnD1Sn07e3okzn123XXxMwuTT3Lk=",
    fullDescription: "India's festivals are a true reflection of its diverse cultures, religions, and communities. From the lights of Diwali to the colors of Holi, each festival is celebrated with grandiosity and spirit. The entire country comes together to celebrate, bringing a sense of unity amidst diversity. Festivals like Eid, Christmas, and Navratri highlight India’s spirit of secularism and respect for all religions. With every region having its own unique festivals, there's always something to celebrate in India."
},
{
    id: 4,
    title: "India’s Spiritual Heritage",
    image: "https://images.unsplash.com/photo-1718219155759-3d5fb012419f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEluZGlhJUUyJTgwJTk5cyUyMFNwaXJpdHVhbCUyMEhlcml0YWdlfGVufDB8fDB8fHww",
    fullDescription: "India is often seen as the spiritual hub of the world, with its ancient roots in practices like yoga, meditation, and various forms of worship. From Varanasi to Rishikesh, and Bodh Gaya to Amritsar, spiritual seekers flock to these places to find peace and enlightenment. India's spiritual heritage is steeped in teachings from Hinduism, Buddhism, Jainism, and Sikhism, offering wisdom that has been passed down through generations."
},
{
    id: 5,
    title: "Culinary Journey Across India",
    image: "https://plus.unsplash.com/premium_photo-1699316113667-2d146539bad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEN1bGluYXJ5JTIwSm91cm5leSUyMEFjcm9zcyUyMEluZGlhfGVufDB8fDB8fHww",
    fullDescription: "India's cuisine is as diverse as its geography, with each region offering its own specialties. From the fiery curries of the South to the delicate flavors of North Indian dishes, there's something to tantalize every palate. Street food like chaat, dosas, and vada pav are crowd favorites, while luxurious dishes like biryani and butter chicken showcase India's rich culinary traditions. The use of spices, herbs, and local ingredients makes Indian cuisine unique and flavorful."
},
{
    id: 6,
    title: "Art and Craft of India",
    image: "https://images.unsplash.com/photo-1470487274665-5c67dce2beca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJ0JTIwYW5kJTIwQ3JhZnQlMjBvZiUyMEluZGlhfGVufDB8fDB8fHww",
    fullDescription: "India's art and crafts reflect its cultural richness and diversity. Handicrafts like pottery, textile weaving, painting, and jewelry-making have been practiced for centuries. Each region of India is known for its specific crafts, such as Pashmina shawls from Kashmir, Madhubani paintings from Bihar, and the blue pottery of Jaipur. These crafts not only showcase the skills of Indian artisans but also preserve the cultural heritage of the country."
},
{
    id: 7,
    title: "Traditional Dance Forms of India",
    image: "https://media.istockphoto.com/id/184329009/photo/classical-indian-kuchipudi-dancer.webp?a=1&b=1&s=612x612&w=0&k=20&c=ACu-EX4Xsha_W_Nj_twziOGLJoeBBwo-Nmj3DlSy5us=",
    fullDescription: "India is home to numerous traditional dance forms, each representing the ethos of a particular region. Classical dance forms like Bharatanatyam, Kathak, Odissi, and Kuchipudi are known for their grace and storytelling techniques. Folk dances like Bhangra from Punjab and Garba from Gujarat reflect the vibrancy of Indian culture. These dances are not just entertainment; they are an expression of emotions, devotion, and stories passed down through generations."
},
{
    id: 8,
    title: "Iconic Monuments of India",
    image: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SWNvbmljJTIwTW9udW1lbnRzJTIwb2YlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    fullDescription: "India's iconic monuments are testaments to its rich history and architectural prowess. From the Taj Mahal to the Qutub Minar, each monument has a story to tell. The forts, palaces, temples, and mosques spread across the country reflect the architectural styles of various dynasties, from the Mughals to the British. These landmarks attract millions of tourists from around the world, eager to explore India’s glorious past."
},
{
    id: 9,
    title: "Languages of India",
    image: "https://images.unsplash.com/photo-1657302155485-790b74d0b5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZ3VhZ2VzJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    fullDescription: "India is a linguistic mosaic, with over 22 official languages and hundreds of dialects spoken across the country. Hindi and English are widely spoken, but each region has its own local language, such as Bengali, Tamil, Telugu, and Marathi. This linguistic diversity is a reflection of India's cultural richness, with literature, music, and traditions unique to each language group."
},
{
    id: 10,
    title: "Ayurveda and Wellness in India",
    image: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXl1cnZlZGElMjBhbmQlMjBXZWxsbmVzcyUyMGluJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
    fullDescription: "Ayurveda, the traditional Indian system of medicine, focuses on balancing the mind, body, and spirit for overall health. Using natural herbs, oils, and therapies, Ayurveda offers holistic wellness practices. Kerala, known as the home of Ayurveda, attracts tourists seeking rejuvenation and healing through age-old treatments and therapies."
},
{
    id: 11,
    title: "Indian Wedding Traditions",
    image: "https://images.unsplash.com/photo-1601121868898-4581104b29de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwV2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    fullDescription: "Indian weddings are a grand affair, filled with rituals, music, and dance. Each culture has unique customs, from the North Indian baraat to South Indian tying of the mangalsutra. Weddings in India are not just a union of two people but a celebration of two families coming together. With vibrant attire, elaborate ceremonies, and feasts, Indian weddings are an unforgettable experience."
},
{
    id: 12,
    title: "Textile Traditions of India",
    image: "https://plus.unsplash.com/premium_photo-1725456680671-464ffa524c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRleHRpbGUlMjBUcmFkaXRpb25zJTIwb2YlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    fullDescription: "India has a rich tradition of textile production, with each region having its specialty. From the silk saris of Banaras to the cotton weaves of Gujarat, Indian textiles are known for their quality and beauty. Techniques like block printing, tie-dye, and embroidery have been passed down for generations, showcasing India's craftsmanship in textiles."
},
{
    id: 13,
    title: "Indian Cinema: Bollywood and Beyond",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwQ2luZW1hJTNBJTIwQm9sbHl3b29kJTIwQmV5b25kfGVufDB8fDB8fHww",
    fullDescription: "Indian cinema, especially Bollywood, has a massive influence on culture and entertainment. Bollywood movies are known for their music, dance, and vibrant storytelling. Besides Bollywood, regional cinema in Tamil, Telugu, Bengali, and other languages also contributes to the diversity of Indian cinema, offering unique perspectives and themes."
},
{
    id: 14,
    title: "Yoga and Meditation in India",
    image: "https://images.unsplash.com/photo-1463559830741-e117d53be7c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8WW9nYSUyMGFuZCUyME1lZGl0YXRpb24lMjBpbiUyMEluZGlhfGVufDB8fDB8fHww",
    fullDescription: "India is the birthplace of yoga and meditation, practices that have spread worldwide for physical and mental wellness. Rishikesh, known as the Yoga Capital of the World, attracts thousands of practitioners seeking to learn and deepen their understanding of yoga and meditation in its spiritual atmosphere."
},
{
    id: 15,
    title: "Folk Music of India",
    image: "https://plus.unsplash.com/premium_photo-1718570256549-702fc900db10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9sayUyMG11c2ljJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    fullDescription: "Indian folk music is a soulful expression of the country’s rural life, with songs about nature, love, and spirituality. Each region has its own unique style, from the Bihu music of Assam to the Baul songs of Bengal. These songs are often accompanied by traditional instruments and are integral to festivals and celebrations."
},
{
    id: 16,
    title: "Architecture of Ancient India",
    image: "https://images.unsplash.com/photo-1705861145781-d192048a3617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFyY2hpdGVjdHVyZSUyMG9mJTIwQW5jaWVudCUyMEluZGlhfGVufDB8fDB8fHww",
    fullDescription: "India’s ancient architecture includes rock-cut caves, temples, and fortresses built over centuries. The intricately carved temples of Khajuraho, Ajanta and Ellora caves, and Dravidian temples showcase the artistic and engineering brilliance of ancient Indian civilizations."
},
{
    id: 17,
    title: "Sacred Rivers of India",
    image: "https://images.unsplash.com/photo-1706186924707-d2acc3bd979a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2FjcmVkJTIwUml2ZXJzJTIwb2YlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    fullDescription: "The rivers of India, such as the Ganga, Yamuna, and Saraswati, are considered sacred and hold immense religious significance. Pilgrims flock to their banks to perform rituals, seek blessings, and immerse themselves in spirituality. These rivers are seen as life-givers, nurturing India's lands and people."
},
{
    id: 18,
    title: "India’s Diverse Clothing Styles",
    image: "https://media.istockphoto.com/id/1205299877/photo/portrait-of-confident-woman-in-sari.webp?a=1&b=1&s=612x612&w=0&k=20&c=7o4WM_wyTTospa79c0tfFMXZDaB0KiCuXa82E0Lnk_U=",
    fullDescription: "India's clothing styles reflect its cultural diversity, with each region having distinct attire. Sarees, lehengas, and dhotis are worn in different styles across India. Traditional attire is adorned during festivals and ceremonies, while modern India embraces a blend of Western and traditional fashion."
},
{
    id: 19,
    title: "Indian Mythology and Legends",
    image: "https://media.istockphoto.com/id/1213718422/vector/lord-rama-with-his-wife-sita-and-brother-laxman-illustration.jpg?s=612x612&w=0&k=20&c=7HK6sk_ipDvWCOyKPpQe7oy3f-BnUWyeitPP_SjgfrA=",
    fullDescription: "India is known for its religious diversity, home to major religions like Hinduism, Islam, Christianity, and Sikhism, as well as smaller faiths like Jainism and Zoroastrianism. Each religion contributes to India’s cultural tapestry, coexisting peacefully and enriching the nation’s heritage."
},
{
    id: 20,
    title: "Indian Wildlife and National Parks",
    image: "https://media.istockphoto.com/id/2154118964/photo/young-man-admiring-view-at-dolphins-nose-kodaikanal-tamilnadu.webp?a=1&b=1&s=612x612&w=0&k=20&c=jtt1-XkfixDIrx2ISo5Obj31VPQgC4nqT_j5ra1bAMw=",
    fullDescription: "India is home to an extraordinary variety of wildlife, with national parks and sanctuaries like Ranthambore and Kaziranga protecting endangered species such as tigers, elephants, and rhinos. India's diverse ecosystems support a wide range of flora and fauna, attracting wildlife enthusiasts from around the globe."
},
{
    id: 21,
    title: "Indian Science and Technology",
    image: "https://media.istockphoto.com/id/641118744/photo/batsman-on-the-stadium-in-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=n3CMktnHveGHZ9dipmnOPzckuDh_5SyV6bVS2yPKX50=",
    fullDescription: "India has made significant advancements in science and technology, from launching missions to Mars to pioneering IT solutions. Indian scientists and engineers are recognized globally, contributing to fields like space exploration, medicine, and information technology."
},
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return <div className="text-center text-red-600 font-bold py-8">Blog post not found</div>;
  }

  const shareBlogPost = () => {
    const url = window.location.href; // Get the current URL of the blog post
    const text = `Check out this blog post: ${post.title}`;
    const shareData = {
      title: post.title,
      text: text,
      url: url,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Blog post shared successfully!'))
        .catch((error) => console.error('Error sharing blog post:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(`Share this link: ${url}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Link to="/Blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-[#333] mb-6 text-center">{post.title}</h1>
      
      <div className="rounded-lg overflow-hidden shadow-lg mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div className="text-lg text-gray-800 leading-relaxed mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <p>{post.fullDescription}</p>
      </div>

      {/* Share Button Section */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold mb-4">Share With your Friends</h3>
        <button 
          onClick={shareBlogPost} 
          className="bg-violet-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:bg-red-700 hover:scale-105"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
