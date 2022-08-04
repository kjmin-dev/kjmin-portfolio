import { Box, Container, Heading, IconButton, Link, Text } from 'theme-ui';
import { VStack } from '../system/Stack';

import {
  AiOutlineMail as MailIcon,
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
} from 'react-icons/ai';

import MyInfo from '../../contents/myinfo.json';

export default function HeadSection() {
  return (
    <Container px={3} py={3} sx={{ width: ['100%', '80%', '1024px'] }}>
      <VStack gap={1}>
        <Heading>{MyInfo.name}</Heading>
        <Text>{MyInfo.job}</Text>
      </VStack>
      <VStack gap={0.5} mt={2}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MailIcon fontSize={20} />
          <Link ml={1} href={MyInfo.links.email.url}>
            {MyInfo.links.email.display}
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <GithubIcon fontSize={20} />
          <Link ml={1} mr={3} href={MyInfo.links.github.url}>
            {MyInfo.links.github.display}
          </Link>
          <LinkedinIcon fontSize={20} />
          <Link ml={1} href={MyInfo.links.linkedin.url}>
            {MyInfo.links.linkedin.display}
          </Link>
        </Box>
      </VStack>
    </Container>
  );
}
