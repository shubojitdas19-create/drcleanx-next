type CartProgressProps = {
  current: "cart" | "checkout" | "complete";
};

const steps = [
  { id: "cart", label: "Bag" },
  { id: "checkout", label: "Delivery & payment" },
  { id: "complete", label: "Confirmation" },
] as const;

export function CartProgress({ current }: CartProgressProps) {
  const currentIndex = steps.findIndex((step) => step.id === current);

  return (
    <nav aria-label="Checkout progress" className="checkout-progress">
      <ol>
        {steps.map((step, index) => (
          <li
            aria-current={step.id === current ? "step" : undefined}
            className={index <= currentIndex ? "is-current" : ""}
            key={step.id}
          >
            <span className="checkout-step-number">{index < currentIndex ? "✓" : index + 1}</span>
            <span>{step.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
