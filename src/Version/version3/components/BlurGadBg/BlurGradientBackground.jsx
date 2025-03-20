
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export const HomeContent2 = () => {
  return (
    <div className="w-full max-w-4xl pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-0">
      {/* Hero Section */}
      <div className="text-left mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
          Create stunning digital experiences
          <span className="text-purple-600"> with our platform</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl">
          Build beautiful, responsive, and intuitive user interfaces that captivate your audience and drive engagement.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg flex items-center gap-2 transition-all text-sm md:text-base">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-purple-600 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg border border-purple-600 transition-all text-sm md:text-base">
            View Demo
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">98%</p>
          <p className="text-sm sm:text-base text-gray-700">Customer satisfaction</p>
        </div>
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">10k+</p>
          <p className="text-sm sm:text-base text-gray-700">Active users</p>
        </div>
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">24/7</p>
          <p className="text-sm sm:text-base text-gray-700">Expert support</p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <Zap size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Lightning Fast</h3>
            <p className="text-sm md:text-base text-gray-700">
              Optimized performance that loads in milliseconds, keeping your users engaged.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <Shield size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Secure by Design</h3>
            <p className="text-sm md:text-base text-gray-700">
              Enterprise-grade security built in from the ground up to protect your data.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <Star size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Beautiful UI</h3>
            <p className="text-sm md:text-base text-gray-700">
              Professionally designed components that look great on any device.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <ArrowRight size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Intuitive UX</h3>
            <p className="text-sm md:text-base text-gray-700">
              User-centered design that makes navigation and interaction effortless.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-600 bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-xl text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to transform your digital presence?</h2>
        <p className="mb-5 md:mb-6 text-sm md:text-base">Join thousands of satisfied customers who have elevated their online experience.</p>
        <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base">
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
};

const BlurGradientBackground = () => {
  return (
    <main className="frame w-full min-h-screen bg-white overflow-x-hidden">
      <section className="container relative w-full min-h-screen bg-white mx-auto px-4 sm:px-6 lg:px-8">
        {/* Purple blurry gradient background */}
        <div
          style={{ filter: "blur(100px)" }}
          className="absolute rounded-full bg-blur w-[100vw] sm:w-[120vw] lg:w-[1500px] h-[100vw] sm:h-[120vw] lg:h-[1500px] -top-[10vw] sm:-top-[15vw] lg:-top-[276px] -left-[10vw] sm:-left-[15vw] lg:-left-[276px] bg-purple-500">
          {/* Empty - just for the background */}
        </div>

        {/* Text on top of purple background */}
        <h1 className="absolute z-10 -top-[10vw] sm:-top-[15vw] lg:-top-[276px] -left-[10vw] sm:-left-[15vw] lg:-left-[276px] w-[100vw] sm:w-[120vw] lg:w-[1500px] h-[100vw] sm:h-[120vw] lg:h-[1500px] flex items-center justify-center text-center">
          {/* this is purple background color */}
        </h1>

        {/* Blue blurry background */}
        <div className="absolute rounded-full bg-blur w-[20vw] sm:w-[25vw] lg:w-[200px] h-[10vw] sm:h-[12vw] lg:h-[100px] top-[5vw] sm:top-[8vw] lg:top-20 left-[5vw] sm:left-[8vw] lg:left-20 blur-2xl sm:blur-3xl bg-blue-500">
          {/* Empty - just for the background */}
        </div>

        {/* Text on top of blue background */}
        <h1 className="absolute z-10 top-[5vw] sm:top-[8vw] lg:top-20 left-[5vw] sm:left-[8vw] lg:left-20 w-[20vw] sm:w-[25vw] lg:w-[200px] h-[10vw] sm:h-[12vw] lg:h-[100px] flex items-center justify-center text-center">
          {/* this is blue background color */}
        </h1>

        {/* Other content */}
        <div className="content relative z-50 flex justify-center sm:justify-start sm:ml-4 md:ml-8 lg:ml-16">
          <HomeContent2></HomeContent2>
        </div>
      </section>
      <section>
      <DeepseekBlogPost></DeepseekBlogPost>
      </section>
    </main>
  );
};

export default BlurGradientBackground;




import { Helmet } from 'react-helmet-async';

const DeepseekBlogPost = () => {
  // Blog post content
  const blogPost = {
    title: "How to Run DeepSeek AI Locally: Complete Step-by-Step Guide",
    description: "Learn how to install and run DeepSeek AI models on your local machine with this comprehensive guide covering hardware requirements, installation steps, and optimization tips.",
    publishDate: "March 20, 2025",
    author: "Tech Expert",
    readTime: "12 min read",
    tags: ["DeepSeek AI", "Local LLM", "AI Models", "Machine Learning", "Open Source AI"],
    heroImage: "/api/placeholder/1200/600",
    tableOfContents: [
      { id: "introduction", title: "Introduction to DeepSeek AI" },
      { id: "requirements", title: "Hardware & Software Requirements" },
      { id: "installation", title: "Installation Process" },
      { id: "configuration", title: "Configuration Settings" },
      { id: "running", title: "Running Your First Model" },
      { id: "optimization", title: "Performance Optimization" },
      { id: "troubleshooting", title: "Common Issues & Troubleshooting" },
      { id: "conclusion", title: "Conclusion" }
    ],
    content: {
      introduction: `
        DeepSeek AI has emerged as one of the most powerful open-source large language models available today. With capabilities rivaling commercial models, running DeepSeek locally gives you complete control over your data while eliminating API costs. This comprehensive guide will walk you through the entire process of setting up and running DeepSeek AI on your own hardware.
      `,
      requirements: `
        Before getting started, ensure your system meets these minimum requirements:

        • GPU: NVIDIA GPU with at least 8GB VRAM (16GB+ recommended for larger models)
        • RAM: 16GB minimum (32GB+ recommended)
        • Storage: 30GB free space for model weights and dependencies
        • OS: Windows 10/11, Ubuntu 20.04+, or macOS 12+
        • CUDA Toolkit: Version 11.8 or higher (for NVIDIA GPUs)
        • Python: Version 3.10 or higher

        For optimal performance with the full-size models, an NVIDIA RTX 3090, 4090, or A100 GPU is recommended. However, this guide will also cover quantization techniques for running on consumer hardware.
      `,
      installation: `
        1. **Create a Python virtual environment**

        \`\`\`bash
        python -m venv deepseek-env
        source deepseek-env/bin/activate  # On Windows: deepseek-env\\Scripts\\activate
        \`\`\`

        2. **Install PyTorch with CUDA support**

        \`\`\`bash
        pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
        \`\`\`

        3. **Install DeepSeek dependencies**

        \`\`\`bash
        pip install transformers huggingface_hub accelerate bitsandbytes sentencepiece protobuf
        \`\`\`

        4. **Download the DeepSeek model**

        \`\`\`python
        from huggingface_hub import snapshot_download

        # For the 7B quantized model
        snapshot_download(repo_id="deepseek-ai/deepseek-coder-7b-instruct-q4_0", local_dir="./models/deepseek-7b-q4")
        \`\`\`

        You can replace the repo_id with other DeepSeek variants based on your hardware capabilities.
      `,
      configuration: `
        Create a configuration file named \`config.json\` in your project directory:

        \`\`\`json
        {
          "model_path": "./models/deepseek-7b-q4",
          "context_length": 4096,
          "gpu_layers": "auto",
          "main_gpu": 0,
          "temperature": 0.7,
          "max_tokens": 2048,
          "log_file": "./logs/deepseek.log",
          "server": {
            "host": "127.0.0.1",
            "port": 8080
          }
        }
        \`\`\`

        This provides a balanced starting point that you can adjust based on your specific needs and hardware capabilities.
      `,
      running: `
        Now let's create a simple Python script to run the model:

        \`\`\`python
        import torch
        from transformers import AutoTokenizer, AutoModelForCausalLM

        # Load the model and tokenizer
        model_path = "./models/deepseek-7b-q4"
        tokenizer = AutoTokenizer.from_pretrained(model_path)
        model = AutoModelForCausalLM.from_pretrained(
            model_path,
            torch_dtype=torch.float16,
            device_map="auto",
            load_in_4bit=True
        )

        # Set up a prompt template
        prompt = """<|im_start|>user
        Write a function to calculate the Fibonacci sequence
        <|im_end|>
        <|im_start|>assistant
        """

        # Generate response
        input_ids = tokenizer(prompt, return_tensors="pt").input_ids.to(model.device)
        
        outputs = model.generate(
            input_ids,
            max_new_tokens=1024,
            temperature=0.7,
            do_sample=True,
        )
        
        print(tokenizer.decode(outputs[0], skip_special_tokens=False))
        \`\`\`

        Run this script to generate your first response from the locally running DeepSeek model!
      `,
      optimization: `
        To optimize performance on limited hardware:

        1. **Quantization**: We've already used 4-bit quantization in our example. This reduces memory usage significantly with minimal quality loss.

        2. **Context Length Management**: Reduce the context_length parameter if you're experiencing memory issues.

        3. **Batch Processing**: For multiple queries, batch them together:

        \`\`\`python
        batch_inputs = tokenizer(prompts, padding=True, return_tensors="pt").to(model.device)
        batch_outputs = model.generate(**batch_inputs, max_new_tokens=512)
        \`\`\`

        4. **Offloading**: For systems with limited VRAM but good RAM:

        \`\`\`python
        model = AutoModelForCausalLM.from_pretrained(
            model_path,
            device_map="auto",
            offload_folder="./offload"
        )
        \`\`\`

        5. **Use Flash Attention**: If you have a GPU that supports it:

        \`\`\`bash
        pip install flash-attn
        \`\`\`

        Then add "'use_flash_attention=True'" to your model loading parameters.
      `,
      troubleshooting: `
        **Common Issues & Solutions:**

        1. **Out of Memory Errors**
           • Try a smaller model variant (1.3B or 7B instead of 34B)
           • Increase quantization (8-bit to 4-bit)
           • Reduce context length
           • Close other GPU-intensive applications

        2. **Slow Generation Speed**
           • Lower the temperature for more deterministic (faster) outputs
           • Use a smaller model
           • Enable flash attention if supported
           • Set num_beams=1 to disable beam search

        3. **Installation Errors**
           • Ensure CUDA toolkit version matches PyTorch installation
           • Try installing with pip instead of conda or vice versa
           • Update GPU drivers to latest version

        4. **Model Loading Failures**
           • Check internet connection for downloads
           • Verify model path is correct
           • Ensure enough disk space is available
           • Try downloading model files manually from Hugging Face
      `,
      conclusion: `
        Running DeepSeek AI locally provides privacy, eliminates API costs, and gives you complete control over model parameters. While it requires some technical know-how and decent hardware, the benefits are substantial for developers, researchers, and enthusiasts who need reliable AI capabilities without cloud dependencies.

        As quantization techniques and optimizations continue to improve, running powerful LLMs locally will become increasingly accessible to users with consumer hardware. The steps outlined in this guide should help you get started with DeepSeek AI on your local machine regardless of your specific hardware constraints.

        Remember to check DeepSeek's GitHub repository regularly for updates, as the project is under active development with frequent improvements to model performance and efficiency.
      `
    }
  };

  // Function to render sections
  const renderSection = (id, title, content) => (
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none">
        {content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-4 leading-relaxed text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* SEO with React Helmet Async */}
      <Helmet>
        <title>{blogPost.title} | Your Tech Blog</title>
        <meta name="description" content={blogPost.description} />
        <meta name="keywords" content={blogPost.tags.join(", ")} />
        <meta name="author" content={blogPost.author} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.description} />
        <meta property="og:image" content={blogPost.heroImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blogPost.publishDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.description} />
        <meta name="twitter:image" content={blogPost.heroImage} />
        <link rel="canonical" href="https://yourblog.com/how-to-run-deepseek-ai-locally" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "${blogPost.title}",
              "description": "${blogPost.description}",
              "image": "${blogPost.heroImage}",
              "author": {
                "@type": "Person",
                "name": "${blogPost.author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Tech Blog",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourblog.com/logo.png"
                }
              },
              "datePublished": "${blogPost.publishDate}",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourblog.com/how-to-run-deepseek-ai-locally"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Header with blurry gradient background */}
      <header className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300/20 to-teal-300/20 blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-100/80 backdrop-blur-sm">
              <span className="text-indigo-700 font-medium text-sm uppercase tracking-wider">AI & Machine Learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{blogPost.title}</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">{blogPost.description}</p>
            <div className="flex items-center justify-center space-x-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{blogPost.publishDate}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto px-4 -mt-16 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={blogPost.heroImage} alt="DeepSeek AI Model Visualization" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Table of Contents - Sticky on Desktop */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="md:sticky md:top-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
                <nav>
                  <ul className="space-y-3">
                    {blogPost.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`} 
                          className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200 text-sm font-medium"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-md font-bold text-gray-800 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share buttons */}
                <div className="mt-8">
                  <h3 className="text-md font-bold text-gray-800 mb-3">Share</h3>
                  <div className="flex space-x-3">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100">
              {/* Introduction Section */}
              {renderSection("introduction", blogPost.tableOfContents[0].title, blogPost.content.introduction)}
              
              {/* Requirements Section */}
              {renderSection("requirements", blogPost.tableOfContents[1].title, blogPost.content.requirements)}
              
              {/* Installation Section */}
              {renderSection("installation", blogPost.tableOfContents[2].title, blogPost.content.installation)}
              
              {/* Configuration Section */}
              {renderSection("configuration", blogPost.tableOfContents[3].title, blogPost.content.configuration)}
              
              {/* Running Section */}
              {renderSection("running", blogPost.tableOfContents[4].title, blogPost.content.running)}
              
              {/* Optimization Section */}
              {renderSection("optimization", blogPost.tableOfContents[5].title, blogPost.content.optimization)}
              
              {/* Troubleshooting Section */}
              {renderSection("troubleshooting", blogPost.tableOfContents[6].title, blogPost.content.troubleshooting)}
              
              {/* Conclusion Section */}
              {renderSection("conclusion", blogPost.tableOfContents[7].title, blogPost.content.conclusion)}

              {/* Author Bio */}
              <div className="mt-16 border-t border-gray-200 pt-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                    TE
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{blogPost.author}</h3>
                    <p className="text-gray-600 text-sm">AI & ML Specialist with 10+ years of experience in deploying large language models for production environments.</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h3>
                <p className="text-gray-600 mb-6">Get the latest tutorials and guides on AI development delivered to your inbox.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-r-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/api/placeholder/600/300" alt="Related article" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Comparing DeepSeek with Other Open Source LLMs</h4>
                    <p className="text-gray-600 mb-4">A detailed comparison of performance, capabilities, and resource requirements.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</a>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/api/placeholder/600/300" alt="Related article" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Building a Custom RAG System with DeepSeek</h4>
                    <p className="text-gray-600 mb-4">How to create a powerful retrieval-augmented generation system with local models.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Discussion (6)</h3>
              <div className="space-y-6">
                {/* Comment 1 */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      JD
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">John Doe</h4>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                      </div>
                      <p className="mt-2 text-gray-700">Great tutorial! I managed to get it running on my RTX 3070 after following these instructions. Would love to see an update on how to integrate this with a web UI.</p>
                      <button className="mt-2 text-gray-500 text-sm flex items-center hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Comment 2 with reply */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold">
                      AT
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">Alice Tech</h4>
                        <span className="text-gray-500 text-sm">1 day ago</span>
                      </div>
                      <p className="mt-2 text-gray-700">Has anyone managed to get this working on macOS with Apple Silicon? Im having some issues with the CUDA dependencies.</p>
                      <button className="mt-2 text-gray-500 text-sm flex items-center hover:text-gray-700">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3. */}
                          </button>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          </article>
                          </div>
                          </main>
                          </div>
  )
}