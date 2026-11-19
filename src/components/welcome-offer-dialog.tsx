"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Gift, X } from "lucide-react";

const OPEN_DELAY_MS = 800;

export function WelcomeOfferDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const closeDialog = () => setIsOpen(false);

  return (
    <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="welcome-overlay" />
        <Dialog.Content className="welcome-dialog">
          <Dialog.Close aria-label="Close welcome offer" className="welcome-close">
            <X aria-hidden="true" size={18} />
          </Dialog.Close>

          <span className="welcome-badge">
            <Gift aria-hidden="true" size={14} />
            Welcome offer
          </span>

          <Dialog.Title className="welcome-title">
            Sign up or log in to get <span>10% instant discount</span>
          </Dialog.Title>
          <Dialog.Description className="welcome-description">
            Create your DrCleanX account or log in to unlock 10% off your first order.
          </Dialog.Description>

          <div className="welcome-code">
            <small>Use this code at checkout</small>
            <strong>FIRST10</strong>
          </div>

          <div className="welcome-actions">
            <Link className="welcome-primary" href="/signup" onClick={closeDialog}>
              Sign up &amp; get 10% off
            </Link>
            <Link className="welcome-secondary" href="/login" onClick={closeDialog}>
              Log in
            </Link>
            <button className="welcome-later" onClick={closeDialog} type="button">
              Maybe later
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
