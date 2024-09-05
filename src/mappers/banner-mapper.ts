import { RibbonColor, RibbonSize } from '@/components';
import { Banners } from '@/types';

export const bannerMapper = (banners: Banners) => {
  return banners.data.map((banner) => ({
    img: banner.attributes.image.data.attributes.url,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle,
    buttonLabel: banner.attributes.button?.label,
    buttonLink: banner.attributes.button?.link,
    ribbon: banner.attributes.ribbon?.text,
    ribbonColor: banner.attributes.ribbon?.color as RibbonColor,
    ribbonSize: banner.attributes.ribbon?.size as RibbonSize,
  }));
};
