'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text, Box,
  Container, Code
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Создание проекта</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              
              <Text color="gray.600">
              <ul>
                <li>Открываем Godot.</li>
                <li>Нажимаем “+New” (+Новый).</li>
                <li>Вводим имя в “Project Name” (Название проекта).</li>
                <li>Обязательно(!) нажимаем кнопку “Create folder” (Создать папку).</li>
                <li>Нажимаем “Создать и редактировать”.</li>
            </ul>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Настройка окна проекта</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                        <ul>
              <li>На верхней панели заходим в “Проект” и выбираем “Настройки проекта”.</li>
              <li>Выбираем в левой колонке “Дисплей” и “Окно”. В опции “Ширина экрана” вводим 240. В опции “Высота экрана” вводим 135.</li>
              <li>Ниже видим раздел “Растягивание”, в опции “Режим” выбираем “canvas_items”.</li>
              <li>В верхнем правом углу нажимаем “Расширенные настройки”. В первом разделе “Размер” почти в самом низу есть параметры “Переопределение ширины окна” и “Переопределение высоты окна”. Вводим 1920 и 1080.</li>
              <li>В разделе “Основное” настроек проекта в левой колонке ищем раздел *Рендеринг*. В нем выбираем раздел “Текстуры” и в “Текстура холста” меняем настройку “Фильтр текстур по умолчанию” с “Linear” на “Nearest”.</li>
                        </ul>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Ссылки</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                To get started with Chakra UI, you can install it via npm or yarn, and
                then import the components you need in your project. The Chakra UI
                documentation <br/>
                <Code>Hello world</Code>
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}