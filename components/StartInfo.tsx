'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function StartInfo() {
  return (
    <Box id = "downloads" bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Загрузки
              </Text>
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Необходимый софт
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Загрузочные материалы, которые необходимы для повторения действий из уроков, включают в себя программное обеспечение, ассеты и другие обучающие ресурсы.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: 'Gogot 4',
    content: (
      <>
        <StatsText><a href="https://godotengine.org/download/windows/">Ссылка - </a></StatsText> скачать с официального сайта Godot Engine
      </>
    ),
  },
  {
    title: 'Aseprite',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without history
        limitations
      </>
    ),
  },
  {
    title: 'Набор ассетов',
    content: (
      <>
        <StatsText><a href="https://drive.google.com/drive/folders/1WmFL4zyeCwXks4QHI7f9fhRt0pWqI9Ri?usp=drive_link">Ссылка - </a></StatsText> на Google Drive.
      </>
    ),
  },
  {
    title: 'Проекты студентов',
    content: (
      <>
        <StatsText><a href="https://drive.google.com/drive/folders/10EajsTnmejX7-79_OIWwnyrzwwav-pls?usp=sharing">Ссылка - </a></StatsText> загрузить или скачать свой проект.
        
      </>
    ),
  },
]