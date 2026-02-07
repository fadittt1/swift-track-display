import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import gpsVehicle from '@/assets/gps-vehicle-box.png';
import gpsPerson from '@/assets/gps-person-box.png';
import gpsAnimal from '@/assets/gps-animal-box.png';

const products = [
    {
        id: 1,
        nameKey: 'vehicleGps',
        categoryKey: 'gpsVehicle',
        image: gpsVehicle
    },
    {
        id: 2,
        nameKey: 'personGps',
        categoryKey: 'gpsPerso',
        image: gpsPerson
    },
    {
        id: 3,
        nameKey: 'catGps',
        categoryKey: 'gpsAnimal',
        image: gpsAnimal
    }
];

export const Products = () => {
    const { t } = useTranslation();
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {t('products.title')}
                        </h2>
                        <p className="text-base text-gray-500">
                            {t('products.subtitle')}
                        </p>
                    </div>
                    <button className="hidden md:block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        {t('products.viewAll')}
                    </button>
                </div>

                {/* Borderless Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group"
                        >
                            {/* Floating Product Image - No Container */}
                            <div className="mb-6 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={t(`products.items.${product.nameKey}`)}
                                    className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Info - Clean Text Layout */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                    {t(`products.items.${product.nameKey}`)}
                                </h3>

                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                                    className="text-cyan-600 hover:text-cyan-700 text-sm font-semibold inline-block transition-colors"
                                >
                                    {t('products.loginToDashboard')}
                                </a>

                                <p className="text-gray-500 text-xs uppercase tracking-wider">
                                    {t(`products.categories.${product.categoryKey}`)}
                                </p>

                                <button
                                    onClick={scrollToContact}
                                    className="mt-4 w-full py-2.5 px-4 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-md"
                                >
                                    {t('products.readMore')}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 flex justify-center md:hidden">
                    <button className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        {t('products.viewAll')}
                    </button>
                </div>
            </div>
        </section>
    );
};
