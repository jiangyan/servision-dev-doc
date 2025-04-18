import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';

export default function HomePage() {
  return (
    <main className="container py-12 text-center md:py-24">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
        Servision Development Guidelines
      </h1>
      <p className="mx-auto mb-12 max-w-xl text-lg text-fd-muted-foreground md:text-xl">
        Welcome to the official documentation for Servision's software development
        practices. Find guidelines, standards, and best practices for building
        high-quality software.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Explore the Guidelines</h2>
      <Cards className="mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Tech Stacks"
          description="Overview of approved technologies and frameworks."
          href="/docs/tech-stacks"
        />
        <Card
          title="Project Dev Spec"
          description="General project development processes and standards."
          href="/docs/project-dev-spec"
        />
        <Card
          title="Frontend Dev Spec"
          description="Specific guidelines for frontend development."
          href="/docs/frontend-dev-spec"
        />
        <Card
          title="Backend Dev Spec"
          description="Specific guidelines for backend development (Java)."
          href="/docs/backend-dev-spec"
        />
        <Card
          title="Db Spec"
          description="Database design standards and usage guidelines."
          href="/docs/db-spec"
        />
        <Card
          title="DevOps"
          description="Practices for deployment, infrastructure, and monitoring."
          href="/docs/devops"
        />
      </Cards>
    </main>
  );
}
