import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-pink-200 via-pink-100 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
      >
        To My Dearest Disha Jain ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl"
      >
        Happy 4 Years, my pgll❤✨

4 saal ho gaye hum dono ko saath… 🌍 aur har din, har moment, tu meri life ka sabse beautiful part bani ho. Aaj chahe hum mil nhi paaye, par meri feelings aur pyaar hamesha tere sath hi h.💞💖🥰😘
 Tu meri smile ki wajah h, meri life ki sabse badi strength h.😚❤
Aaj ke din main bas itna kehna chahta I’m lucky to have you, and I promise har din tujhe aur zyada special feel karvata rahunga. 🥰😚

Cheers to our 4 years of love, trust & togetherness… aur countless saal aur aane wale h. 🫶
I love you, forever & always💖❤🌍
      </motion.p>

      <motion.img
        src="/images/hand-holding.jpeg"
        alt="Hand Holding"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="mt-12 w-72 md:w-96 rounded-2xl shadow-2xl"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="mt-8 text-gray-600 italic"
      >
        – With endless love, Tera Dudu
      </motion.p>
    </div>
  );
}
