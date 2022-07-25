import { Carousel } from '@mantine/carousel';
import { Container, Image } from '@mantine/core';

export function SponsorCarousel() {
    return (
        <Container>
            <Carousel
              withIndicators
              height={200}
              slideSize="20%"
              slideGap="md"
              breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
              ]}
              loop
              align="start"
            >
                <Carousel.Slide>
                    <Image
                      src="/images/sponsors/H-E-B.png"
                      alt="H-E-B"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                      src="/images/sponsors/google-cloud.png"
                      alt="Google Cloud"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                      src="/images/sponsors/jpmorgan-chase-logo.png"
                      alt="JPMorgan Chase"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                      src="/images/sponsors/matrix.png"
                      alt="Matrix"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                      src="/images/sponsors/paycom.png"
                      alt="Paycom"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                      src="/images/sponsors/valero.png"
                      alt="Valero"
                    />
                </Carousel.Slide>
            </Carousel>
        </Container>
    );
}
