import React from 'react';
import Container from '../../components/container/container';
import Cookie from '../../components/cookie/cookie';
import Footer from '../../components/footer/footer';
import ForgotPasssword from '../../components/forgot_password/forgot_password';
import HeroSimple from '../../components/hero/hero_simple';

export default function ForgotPasswordPage() {
  return (
    <>
      <section>
        <HeroSimple title="Login" />
        <Container>
          <ForgotPasssword />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
