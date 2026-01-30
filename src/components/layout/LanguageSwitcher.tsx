import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇹🇳' },
];

export const LanguageSwitcher = ({ isScrolled }: { isScrolled?: boolean }) => {
    const { i18n } = useTranslation();

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-all duration-200 ${isScrolled
                            ? 'text-foreground hover:bg-muted'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                >
                    <Languages className="w-5 h-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#11141E] border-white/10 text-white">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => i18n.changeLanguage(lang.code)}
                        className={`flex items-center justify-between cursor-pointer focus:bg-white/10 focus:text-white ${i18n.language === lang.code ? 'bg-white/5 text-accent' : ''
                            }`}
                    >
                        <span>{lang.label}</span>
                        <span className="ml-2">{lang.flag}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
