import { useState, memo, Suspense,  ExoticComponent } from 'react';


export default function TabContainer() {
  const [tab, setTab] = useState<'about' | 'posts' | 'contact'>('about');

  return (
    <Suspense fallback={'Loading...'}>
      <TabButton
        isActive={tab === 'about'}
        action={() => setTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        action={() => setTab('posts')}
      >
        Posts
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        action={() => setTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </Suspense>
  );
}

import { useTransition, ReactNode } from 'react';
import { getThemeContext, useTheme } from "@/providers/theme/useTheme";
import { ThemeContext } from "@/providers/theme/ThemeContext";

interface TabButtonProps {
  action: () => void | Promise<void>;
  children: ReactNode;
  isActive: boolean;
}

function TabButton({ action, children, isActive }: TabButtonProps) {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return <b>{children}</b>;
  }

  if (isPending) {
    return <b style={{color: 'yellow'}}>{children}</b>;
  }

  return (
    <button onClick={async () => {
      startTransition(async () => {
        await action();
      });
    }}>
      {children}
    </button>
  );
}

function AboutTab() {
  return (
    <p>Welcome to my profile!</p>
  );
}



interface SlowPostProps {
  index: number;
}

function SlowPost({ index }: SlowPostProps) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

const PostsTab: ExoticComponent<{}> = memo(({}) => {
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');
  const { theme } = getThemeContext()
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <ul className="items">
      {items}
    </ul>
  );
});

function ContactTab() {
  return (
    <>
      <p>
        You can find me online here:
      </p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}

