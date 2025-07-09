import React from 'react';
import { Music, Youtube, Camera, BookOpen, ExternalLink, Play, Eye, Heart, Clock, Radio, Instagram, MapPin, Star, Users } from 'lucide-react';

interface BlogPost {
  ID: number;
  title: string;
  excerpt: string;
  date: string;
  URL: string;
  featured_image?: string;
  author: {
    name: string;
  };
}

function RecentBlogPosts() {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Function to extract first image from post content
  const extractFirstImage = (content: string): string | null => {
    // Look for img tags in the content
    const imgRegex = /<img[^>]+src="([^">]+)"/i;
    const match = content.match(imgRegex);
    
    if (match && match[1]) {
      // If it's a WordPress.com hosted image, ensure we get a reasonable size
      let imageUrl = match[1];
      if (imageUrl.includes('travelcameraphoto.wordpress.com')) {
        // Remove any existing size parameters and add our own
        imageUrl = imageUrl.split('?')[0] + '?w=600';
      }
      return imageUrl;
    }
    
    return null;
  };

  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/travelcamera.photo.blog/posts/?number=3');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data.posts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="mb-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 border border-blue-200">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Latest Travel Stories</h3>
          </div>
          <p className="text-lg text-gray-600">Recent adventures and insights from the road</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 border border-blue-200">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Latest Travel Stories</h3>
          </div>
          <p className="text-lg text-gray-600">Recent adventures and insights from the road</p>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Unable to load recent blog posts</p>
          <a
            href="https://travelcamera.photo.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Visit Blog
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 border border-blue-200">
            <BookOpen className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Latest Travel Stories</h3>
        </div>
        <p className="text-lg text-gray-600">Recent adventures and insights from the road</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <a
            key={post.ID}
            href={post.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
          >
            <div className="relative h-48 overflow-hidden">
              {post.featured_image || extractFirstImage(post.content) ? (
                <img
                  src={post.featured_image || extractFirstImage(post.content) || ''}
                  alt={stripHtml(post.title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                          <svg class="w-16 h-16 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </div>
                      `;
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(post.date)}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {stripHtml(post.title)}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {stripHtml(post.excerpt)}
              </p>
              
              <div className="flex items-center justify-end text-sm text-gray-500">
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContentSections() {
  const recentVideos = [
    {
      id: 'hjIEqtkZbck',
      title: 'girl crush - little big town',
      thumbnail: 'https://img.youtube.com/vi/Fi_47gWD1sw/maxresdefault.jpg',
      duration: '3:56',
      views: '324',
      description: 'A fun and vibrant cover of Little Big Town\'s catchy "girl crush" with my new guitar.',
      url: 'https://www.youtube.com/watch?v=Fi_47gWD1sw'
    },
    {
      id: 'PJpmB8QNn2Y',
      title: 'found a love - 7 hills worship',
      thumbnail: 'https://img.youtube.com/vi/PJpmB8QNn2Y/maxresdefault.jpg',
      duration: '12:18',
      views: '1.6K',
      description: 'A heartfelt worship cover of "found a love" by 7 Hills Worship, sharing the message of faith and love.',
      url: 'https://www.youtube.com/watch?v=PJpmB8QNn2Y'
    },
    {
      id: 'SGZHFZKmsFI',
      title: 'mess it up - gracie abrams',
      thumbnail: 'https://img.youtube.com/vi/SGZHFZKmsFI/maxresdefault.jpg',
      duration: '10:45',
      views: '3.1K',
      description: 'My acoustic cover of Gracie Abrams\' emotional hit "mess it up" - bringing my own style to this beautiful song.',
      url: 'https://www.youtube.com/watch?v=SGZHFZKmsFI'
    },
  ];

  const soundCloudTracks = [
    {
      title: 'its ok if you forget me',
      duration: '2:32',
      likes: '2',
      url: 'https://soundcloud.com/alykatpaul/its-ok-if-you-forget-me',
      description: 'A deeply personal and emotional original track about letting go and finding peace in forgetting.',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      title: 'love at first fight',
      duration: '3:04',
      likes: '2',
      url: 'https://soundcloud.com/alykatpaul/love-at-first-fight',
      description: 'An original song exploring the complex emotions of relationships and the beauty found in conflict.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'bleeds',
      duration: '2:52',
      likes: '5',
      url: 'https://soundcloud.com/alykatpaul/bleeds',
      description: 'A haunting and vulnerable original piece about emotional wounds and the healing process.',
      gradient: 'from-orange-500 to-orange-700'
    }
  ];

  const ugcBrands = [
    {
      name: 'Skincare Brands',
      category: 'Beauty & Wellness',
      description: 'Authentic product reviews and skincare routines',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Fashion Brands',
      category: 'Lifestyle & Fashion',
      description: 'Style integration and outfit inspiration content',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Tech Products',
      category: 'Technology',
      description: 'Unboxing and lifestyle tech integration',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Food & Beverage',
      category: 'Lifestyle',
      description: 'Product tastings and lifestyle integration',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Travel Gear',
      category: 'Travel & Adventure',
      description: 'Travel product reviews and destination content',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Wellness Brands',
      category: 'Health & Fitness',
      description: 'Fitness and wellness lifestyle content',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  const photographyHighlights = [
    {
      location: 'Berlin, Germany',
      image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Urban architecture and city life'
    },
    {
      location: 'Malaysian Landscapes',
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Natural beauty and tropical scenes'
    },
    {
      location: 'European Adventures',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Historic cities and cultural moments'
    },
    {
      location: 'Street Photography',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Candid moments and urban stories'
    }
  ];

  return (
    <>
      {/* UGC Section */}
      <section id="ugc" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 border border-pink-200">
                  <Camera className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">UGC Content Creation</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I specialize in creating authentic user-generated content that converts. 
                From product reviews to lifestyle integration, I help brands tell their story 
                through genuine experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://ugcalykatpaul.my.canva.site/?fbclid=PAZXh0bgNhZW0CMTEAAab6ipP4AMemuuO9HtRP_cp3pU8ed-gufTeHU818ZBJ9BLbWJ4rh60LO3Ag_aem_BZLItI8y4su6FsEtI-tZ0w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Portfolio
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://alykatpaul.my.canva.site/my-ugc-portfolio-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                >
                  UGC Gallery
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-red-400">
                <div className="text-center">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Brand Collaborations</h3>
                  <p className="opacity-90">Authentic content that drives engagement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-3xl p-8 md:p-12 border border-red-200 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4 border border-red-300">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">3K+</div>
                <div className="text-gray-600">Instagram Followers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4 border border-red-300">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4 border border-red-300">
                  <Camera className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">1K+</div>
                <div className="text-gray-600">Content Pieces</div>
              </div>
            </div>
          </div>

          {/* UGC Portfolio Examples */}
          <div className="mb-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Brand Collaborations</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I've had the privilege of working with amazing brands across various industries, 
                creating authentic content that resonates with audiences and drives results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ugcBrands.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${brand.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full mb-2">
                        {brand.category}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-white opacity-80" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{brand.name}</h4>
                    <p className="text-gray-600 text-sm">{brand.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combined Music Section */}
      <section id="music" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4 border border-purple-200">
                <Music className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Music</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover my musical journey through original songs on SoundCloud and heartfelt covers on YouTube. 
              From emotional originals to acoustic renditions of your favorite tracks, I share my passion for music across platforms.
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="https://soundcloud.com/alykatpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Listen on SoundCloud
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCp9HbrBajVDya-C-Mjk9w1w?app=desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Watch on YouTube
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* YouTube Videos Section */}
          <div>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 border border-red-200">
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Song Covers</h3>
              </div>
              <p className="text-lg text-gray-600">Watch my acoustic covers and musical performances</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      YouTube
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                      {video.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views} views
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

                  {/* SoundCloud Tracks Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 border border-orange-200">
                  <Radio className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Original Songs</h3>
              </div>
              <p className="text-lg text-gray-600">Listen to my latest original compositions and musical expressions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {soundCloudTracks.map((track, index) => (
                <a
                  key={index}
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                >
                  <div className="relative">
                    <div className={`w-full h-48 bg-gradient-to-br ${track.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      {/* Audio Wave Visualization */}
                      <div className="flex items-end space-x-1 opacity-80">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-full animate-pulse"
                            style={{
                              width: '3px',
                              height: `${Math.random() * 40 + 10}px`,
                              animationDelay: `${i * 0.1}s`,
                              animationDuration: `${1 + Math.random()}s`
                            }}
                          />
                        ))}
                      </div>
                      <Radio className="absolute top-4 left-4 w-8 h-8 text-white opacity-60" />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                      {track.duration}
                    </div>
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      SoundCloud
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                      {track.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {track.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-orange-500" />
                        {track.likes} likes
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
          </div>
        
      </section>

      {/* Enhanced Blog & Photography Section */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 border border-blue-200">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Travel & Photography</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Follow my travel adventures through both written stories and stunning photography. 
              From hidden gems to popular destinations, I capture the world through words and lens.
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="https://travelcamera.photo.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read My Blog
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://www.instagram.com/_travelcamera/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Photography Instagram
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Photography Gallery */}
          <RecentBlogPosts />

          <div className="mb-16">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 border border-pink-200">
                  <Camera className="w-4 h-4 text-pink-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Photography Highlights</h3>
              </div>
              <p className="text-lg text-gray-600">Capturing moments and memories from around the world</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {photographyHighlights.map((photo, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.location}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{photo.location}</span>
                      </div>
                      <p className="text-xs opacity-90">{photo.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}