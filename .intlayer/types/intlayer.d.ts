import "intlayer";
import _2Ysfuk0RxZu2uVpHJfCc from './about-page.ts';
import _3CXSG4i6zq2RuxlTsQEW from './home-page.ts';

declare module 'intlayer' {
  interface __DictionaryRegistry {
    "about-page": typeof _2Ysfuk0RxZu2uVpHJfCc;
    "home-page": typeof _3CXSG4i6zq2RuxlTsQEW;
  }

  interface __DeclaredLocalesRegistry {
    "en": 1;
    "fr": 1;
    "es": 1;
  }

  interface __RequiredLocalesRegistry {
    "en": 1;
    "fr": 1;
    "es": 1;
  }

  interface __StrictModeRegistry { mode: 'inclusive' }
}
