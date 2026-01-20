"use client";

import axios from "axios";
import { FileQuestionIcon, Hash, Mail, MessageSquare, Phone, Send, Star, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {

  const initialFormData = {
    name: "",
    email: "",
    whatsappNo: "",
    lookingFor: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/contact", formData);
      toast.success("Inquiry sent", {
        description: "We'll get back to you soon.",
      });
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Failed to send inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-8 md:py-26 relative z-10 px-4">
      <div className="container mx-auto">
        <div className="bg-[#111] rounded-[3rem] md:rounded-[4rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-2/5 p-8 md:p-20 bg-[#151515] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-6 md:mb-8 italic">Inquiry</h3>
              <h4 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] md:leading-[0.85] mb-8">
                LET'S START <br /> <span className="text-orange-600">EVOLVING.</span>
              </h4>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 md:mb-12">
                Have a vision for your brand? Tell us about your project, and let's craft something that leaves an impact.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-5 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-600 transition-all">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:mauryanstudio@gmail.com" className="text-base md:text-lg font-bold hover:text-orange-500 transition-colors">mauryanstudio@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-600 transition-all">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-base md:text-lg font-bold">+91 95087 17059</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex items-center gap-4">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#151515] bg-neutral-800 flex items-center justify-center"><Star size={10} className="text-orange-600 fill-orange-600" /></div>)}
              </div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">Trusted globally</span>
            </div>
          </div>

          {/* Right Column (Form) */}

          <div className="lg:w-3/5 p-8 md:p-20 bg-[#111] text-left">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10" onSubmit={handleSubmit}>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-12 md:pl-14 pr-6 focus:border-orange-600 focus:outline-none transition-all placeholder:text-gray-700 text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-12 md:pl-14 pr-6 focus:border-orange-600 focus:outline-none transition-all placeholder:text-gray-700 text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3 sm:col-span-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">WhatsApp</label>
                <div className="relative">
                  <Hash className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input
                    type="tel"
                    name="whatsappNo"
                    placeholder="+91 00000 00000"
                    value={formData.whatsappNo}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-12 md:pl-14 pr-6 focus:border-orange-600 focus:outline-none transition-all placeholder:text-gray-700 text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3 sm:col-span-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">What are you looking for?</label>
                <div className="relative">
                  <FileQuestionIcon className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input
                    type="text"
                    name="lookingFor"
                    placeholder="e.g., Branding, Web Design"
                    value={formData.lookingFor}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-12 md:pl-14 pr-6 focus:border-orange-600 focus:outline-none transition-all placeholder:text-gray-700 text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3 sm:col-span-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-5 md:left-6 top-6 text-gray-600 w-4 h-4" />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your goal..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-4 md:py-6 pl-12 md:pl-14 pr-6 focus:border-orange-600 focus:outline-none transition-all placeholder:text-gray-700 resize-none text-sm md:text-base"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 pt-4">
                <button className="w-full bg-orange-600 text-white py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] md:text-xs hover:bg-orange-700 transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-orange-600/20"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                  <Send className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}
