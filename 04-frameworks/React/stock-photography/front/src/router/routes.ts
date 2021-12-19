interface SwitchRoutes {
  root: string;
  monkeys: string;
  cats: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  monkeys: '/monkeys',
  cats: '/cats',
};

export const routes: SwitchRoutes = {
  ...switchRoutes,
};
